const encoder = new TextEncoder()
const MAX_PAYLOAD_BYTES = 3_000
export const DEFAULT_SITE_ORIGIN = 'https://aurora4x-docs.vercel.app'

export interface PreviewImage {
  url: string
  alt: string
}

/** Cut at a readable boundary, counting UTF-8 bytes rather than JS characters. */
export function limitPreviewText(text: string, bytes: number): string {
  if (encoder.encode(text).length <= bytes) return text
  let result = ''
  for (const character of text) {
    if (encoder.encode(result + character + '…').length > bytes) break
    result += character
  }
  const boundary = result.lastIndexOf(' ')
  return (boundary > result.length * 0.7 ? result.slice(0, boundary) : result).trimEnd() + '…'
}

/** Keep Markdown prose and its line breaks; the section title already has its own display. */
export function preparePreviewContent(markdown: string, sectionTitle?: string): { markdown: string; image?: PreviewImage } {
  let body = markdown.replace(/\r\n?/g, '\n').trim()
  if (sectionTitle && body.split('\n')[0].trim() === `**${sectionTitle}**`) {
    body = body.split('\n').slice(1).join('\n').trimStart()
  }
  let image: PreviewImage | undefined
  body = body
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^\[Source: Aurora forum, post \d+\]\([^\n]+\)\s*$/gm, '')
    .replace(/!\[([^\]]*)\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g, (_match, alt: string, url: string) => {
      try {
        const parsed = new URL(url)
        if (!image && /^https?:$/.test(parsed.protocol) && url.length <= 2_048
          && /\.(?:png|gif|jpe?g|webp|avif)$/i.test(parsed.pathname) && !parsed.pathname.includes('/emoji/')) {
          image = { url: parsed.href, alt: alt && alt !== 'image' ? alt : sectionTitle || 'Documentation illustration' }
        }
      } catch { /* Unsupported image URLs do not belong in a public embed. */ }
      return ''
    })
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
  return { markdown: body, image }
}

function serialize(payload: unknown): string {
  // Measure this escaped representation: Discord counts escape sequences in its byte limit.
  return JSON.stringify(payload).replace(/</g, '\\u003c')
}

function excerpt(text: string): string {
  const boundary = Math.max(text.lastIndexOf('\n\n'), text.lastIndexOf('\n'), text.lastIndexOf('. '))
  const wordBoundary = text.lastIndexOf(' ')
  const end = boundary > text.length * 0.7 ? boundary
    : wordBoundary > text.length * 0.8 ? wordBoundary : text.length
  let result = text.slice(0, end).trimEnd()
  // Close a fenced code example if the payload limit falls inside it.
  let fence: string | undefined
  for (const match of result.matchAll(/^ {0,3}(`{3,}|~{3,}).*$/gm)) {
    if (!fence) fence = match[1]
    else if (match[1][0] === fence[0] && match[1].length >= fence.length) fence = undefined
  }
  if (fence) result += `\n${fence}`
  return result + '\n\n… Continue in the full section.'
}

/** Discord website component embeds have a 3,000-byte limit for the entire JSON payload. */
export function buildDiscordEmbed({ title, context, markdown, destination, image }: {
  title: string
  context: string
  markdown: string
  destination: string
  image?: PreviewImage
}): string | undefined {
  const heading = `## ${limitPreviewText(title.replace(/\n/g, ' '), 250)}\n-# ${limitPreviewText(context.replace(/\n/g, ' '), 180)}`
  const render = (content: string, truncated: boolean, includeImage = true) => serialize({
    component: {
      type: 17,
      accent_color: 0x4fc3f7,
      components: [
        { type: 10, content: heading },
        { type: 14, spacing: 1 },
        ...(content ? [{ type: 10, content }] : []),
        ...(image && includeImage ? [{ type: 12, items: [{ media: { url: image.url }, description: limitPreviewText(image.alt, 150) }] }] : []),
        { type: 1, components: [{ type: 2, style: 5, label: truncated ? 'Read full section' : 'Open documentation', url: destination }] },
      ],
    },
  })
  const complete = render(markdown, false)
  if (encoder.encode(complete).length <= MAX_PAYLOAD_BYTES) return complete

  const includeImage = encoder.encode(render('', true)).length <= 1_500
  const characters = Array.from(markdown)
  let low = 0
  let high = Math.min(characters.length, MAX_PAYLOAD_BYTES)
  let result = render(excerpt(''), true, includeImage)
  if (encoder.encode(result).length > MAX_PAYLOAD_BYTES) return undefined
  while (low < high) {
    const mid = Math.ceil((low + high) / 2)
    const candidate = render(excerpt(characters.slice(0, mid).join('')), true, includeImage)
    if (encoder.encode(candidate).length <= MAX_PAYLOAD_BYTES) {
      low = mid
      result = candidate
    } else high = mid - 1
  }
  return result
}

export function shareSiteOrigin(environment: Record<string, string | undefined>): string {
  const vercelHost = environment.VERCEL_ENV === 'production'
    ? environment.VERCEL_PROJECT_PRODUCTION_URL || environment.VERCEL_URL
    : environment.VERCEL_URL
  const configured = environment.SITE_URL || (vercelHost ? `https://${vercelHost}` : DEFAULT_SITE_ORIGIN)
  const url = new URL(configured)
  if (!/^https?:$/.test(url.protocol)) throw new Error('SITE_URL must use HTTP or HTTPS')
  return url.origin
}
