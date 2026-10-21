import { sectionAnchors, sharePath, type ShareView } from '../src/utils/shareLinks'
import { isSpoilerSection, spoilerSafeText } from '../src/utils/spoilers'
import { buildDiscordEmbed, DEFAULT_SITE_ORIGIN, limitPreviewText, preparePreviewContent, type PreviewImage } from './discord-embed'

interface PreviewSection {
  title: string
  content: string
  version?: string
  unreleased?: boolean
}

export interface SharePage {
  path: string
  html: string
}

export interface SharePreview {
  title: string
  description: string
  destination: string
  canonicalUrl?: string
  image?: PreviewImage
  componentEmbed?: string
}

const SITE_NAME = 'Aurora 4x Documentation Archive'
const SPOILER_DESCRIPTION = 'This section contains spoilers. Open the documentation and choose to reveal them.'

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!)
}

/** Plain, spoiler-safe prose for clients that display only a short text preview. */
export function previewDescription(markdown: string): string {
  const plain = spoilerSafeText(markdown)
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]*>/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_>`|]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  return limitPreviewText(plain, 350)
}

export function renderSharePreview({ title, description, destination, canonicalUrl, image, componentEmbed }: SharePreview): string {
  // JSON strings alone do not escape </script>; keep source text out of the HTML parser.
  const redirect = JSON.stringify(destination).replace(/</g, '\\u003c')
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)} — ${SITE_NAME}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta name="theme-color" content="#4fc3f7" />
    ${canonicalUrl ? `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />\n    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />` : ''}
    <meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    ${image ? `<meta property="og:image" content="${escapeHtml(image.url)}" />\n    <meta property="og:image:alt" content="${escapeHtml(image.alt)}" />\n    <meta name="twitter:image" content="${escapeHtml(image.url)}" />\n    <meta name="twitter:image:alt" content="${escapeHtml(image.alt)}" />` : ''}
    ${componentEmbed ? `<script id="discord:component-embed" type="application/json">${componentEmbed}</script>` : ''}
  </head>
  <body>
    <h1>${escapeHtml(title)}</h1>
    <p>${escapeHtml(description)}</p>
    <p><a href="${escapeHtml(destination)}">Open in Aurora documentation</a></p>
    <script>window.location.replace(${redirect})</script>
    <noscript><p>Follow the link above to open this topic. JavaScript is needed for the interactive documentation.</p></noscript>
  </body>
</html>
`
}

/** Build topic and section pages from the exact content rendered by each view. */
export function buildSharePages(
  view: ShareView,
  topic: { id: string; title: string },
  sections: PreviewSection[],
  version?: string,
  unreleased = false,
  siteOrigin = DEFAULT_SITE_ORIGIN,
): SharePage[] {
  if (sections.length === 0) return []
  const versionSuffix = view === 'changelog' ? ` (v${version}${unreleased ? ' — unreleased' : ''})` : ''
  const topicTitle = previewDescription(topic.title)
  const topicIsSpoiler = isSpoilerSection(topic.title)
  const publicSections = sections.filter(section => !isSpoilerSection(section.title))
  const pages: SharePage[] = []
  const anchors = sectionAnchors(sections)

  const addPage = (section?: PreviewSection, sectionSlug?: string) => {
    const spoiler = topicIsSpoiler || (section ? isSpoilerSection(section.title) : publicSections.length === 0)
    const title = spoiler
      ? `Spoiler section${versionSuffix}`
      : `${section ? `${previewDescription(section.title)} — ` : ''}${topicTitle}${versionSuffix}`
    const content = section?.content ?? publicSections.map(item => item.content).join('\n\n')
    const prepared = preparePreviewContent(spoiler ? SPOILER_DESCRIPTION : spoilerSafeText(content), section?.title)
    const description = spoiler
      ? SPOILER_DESCRIPTION
      : previewDescription(prepared.markdown) || `Read ${topicTitle} in the Aurora 4x documentation archive.`
    const pagePath = sharePath(view, topic.id, version, sectionSlug)
    const route = view === 'changelog'
      ? `${view}/${topic.id}/${version === '2.8.0' ? '3.0.0' : version}`
      : `${view}/${topic.id}`
    const destination = `/#${route}${sectionSlug ? `/${sectionSlug}` : ''}`
    const sourceVersion = version ?? section?.version
    const sourceLabel = sourceVersion ? ` · v${sourceVersion}${unreleased || section?.unreleased ? ' — unreleased' : ''}` : ''
    const componentEmbed = buildDiscordEmbed({
      title: spoiler ? 'Spoiler section' : previewDescription(section?.title ?? topic.title),
      context: spoiler ? SITE_NAME : `${SITE_NAME}${section ? ` · ${topicTitle}` : ''}${sourceLabel}`,
      markdown: prepared.markdown,
      destination: new URL(destination, siteOrigin).href,
      image: prepared.image,
    })
    pages.push({
      path: pagePath,
      html: renderSharePreview({ title, description, destination, canonicalUrl: new URL(pagePath, siteOrigin).href, image: prepared.image, componentEmbed }),
    })
  }

  addPage()
  sections.forEach((section, index) => addPage(section, anchors[index]))
  return pages
}
