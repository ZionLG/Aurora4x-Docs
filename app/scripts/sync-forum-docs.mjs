import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { createHash } from 'node:crypto'
import TurndownService from 'turndown'

const topicUrl = 'https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49'
const version = '3.0.0'
const outputDirectory = new URL(`../public/docs/v${version}/`, import.meta.url)
const converter = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' })

// Keep original full-size images, without Discourse's lightbox controls/metadata.
converter.addRule('discourseImage', {
  filter: node => node.nodeName === 'A' && node.classList.contains('lightbox'),
  replacement: (_content, node) => {
    const image = node.querySelector('img')
    if (!image) throw new Error('Discourse lightbox has no image')
    return `\n\n![${image.getAttribute('alt') || 'image'}](${new URL(node.getAttribute('href'), topicUrl)})\n\n`
  },
})
converter.addRule('spoiler', {
  filter: node => node.classList.contains('spoiler'),
  replacement: content => `||${content.trim()}||`,
})
converter.addRule('table', {
  filter: 'table',
  replacement: (_content, node) => {
    const rows = Array.from(node.querySelectorAll('tr'), row =>
      Array.from(row.querySelectorAll('th, td'), cell =>
        converter.turndown(cell.innerHTML).trim().replace(/\|/g, '\\|').replace(/\s*\n\s*/g, ' ')))
    if (!rows.length) return ''
    const line = cells => `| ${cells.join(' | ')} |`
    return `\n\n${[line(rows[0]), line(rows[0].map(() => '---')), ...rows.slice(1).map(line)].join('\n')}\n\n`
  },
})

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(30_000),
  })
  if (!response.ok) throw new Error(`${response.status} fetching ${url}`)
  return response.json()
}

async function fetchTopic() {
  const topic = await fetchJson(`${topicUrl}.json`)
  const posts = new Map(topic.post_stream.posts.map(post => [post.id, post]))
  const stream = topic.post_stream.stream
  while (stream.some(id => !posts.has(id))) {
    const missingIndex = stream.findIndex(id => !posts.has(id))
    const page = await fetchJson(`${topicUrl}/${missingIndex + 1}.json`)
    const previousCount = posts.size
    for (const post of page.post_stream.posts) posts.set(post.id, post)
    if (posts.size === previousCount) throw new Error(`Pagination made no progress at post ${missingIndex + 1}`)
  }
  return { topic, posts: [...posts.values()] }
}

function convertHtml(html) {
  return converter.turndown(html)
    // Required cleanup for older Discourse linked-image markup.
    .replace(/\[!\[image\]\(([^)]+)\)[\s\S]*?\]\(([^)]+?)(?:\s+"image")?\)/g,
      (_match, _thumbnail, full) => `![image](${full})`)
    .replace(/^image\d+×\d+\s+[\d.]+ [KMG]B$/gm, '')
    .replace(/^[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function canonicalTitle(title) {
  // Preserve existing section anchors that used straight quotation marks.
  return title.replace(/[‘’]/g, "'")
}

function sourceLink(postNumber) {
  return `[Source: Aurora forum, post ${postNumber}](${topicUrl}/${postNumber})`
}

function convertPost(post) {
  const markdown = convertHtml(post.cooked)
  if (post.post_number === 1) {
    // The first post contains an index followed by five actual patch sections.
    const start = markdown.indexOf('**Bug Fixes**')
    if (start === -1) throw new Error('Cannot find Bug Fixes in the opening post; review its structure')
    return markdown.slice(start)
      .replace(/^\*\*(Bug Fixes|Minor Changes)\*\*$/gm, `**v${version} $1**`)
      .replace(/^(\*\*.+?\*\*)$/gm, `$1\n\n${sourceLink(post.post_number)}`)
  }
  const [firstLine, ...body] = markdown.split('\n')
  const title = canonicalTitle(firstLine.replace(/^\*\*|\*\*$/g, '').trim())
  if (!title || firstLine.startsWith('[')) throw new Error(`Cannot identify title of post ${post.post_number}`)
  // The app splits on standalone bold lines. Keep subsection titles inside
  // their parent post instead of silently dropping them from topic routing.
  const content = body.join('\n').trim().replace(/^\*\*(.+?)\*\*\s*$/gm, '### $1')
  return `**${title}**\n\n${sourceLink(post.post_number)}\n\n${content}`
}

const sourceIndex = process.argv.indexOf('--source-json')
const source = sourceIndex === -1
  ? await fetchTopic()
  : JSON.parse(await readFile(process.argv[sourceIndex + 1], 'utf8'))
if (source.topic.id !== 49 || !source.topic.title.includes('v3.0.0')) {
  throw new Error('The forum title/version has changed; review the release metadata before importing')
}
const receivedIds = new Set(source.posts.map(post => post.id))
const missingIds = source.topic.post_stream.stream.filter(id => !receivedIds.has(id))
if (missingIds.length) throw new Error(`Missing source posts: ${missingIds.join(', ')}`)
const posts = source.posts
  .filter(post => post.username === 'AuroraSteve' && post.post_type === 1 && post.cooked.trim())
  .sort((a, b) => a.post_number - b.post_number)
if (posts.length !== source.topic.posts_count) throw new Error('Unexpected author/system-post counts; review source before importing')
const markdown = `${posts.map(convertPost).join('\n\n')}\n`
const titles = [...markdown.matchAll(/^\*\*(.+?)\*\*\s*$/gm)].map(match => match[1])
if (new Set(titles).size !== titles.length) throw new Error('Duplicate section titles in converted content')
const provenance = {
  source: topicUrl,
  title: source.topic.title,
  version,
  unreleased: /unreleased/i.test(source.topic.title),
  retrievedAt: new Date().toISOString(),
  latestSourceUpdate: posts.map(post => post.updated_at).sort().at(-1),
  postCount: posts.length,
  sectionCount: titles.length,
  skippedSystemPostNumbers: source.posts.filter(post => !posts.includes(post)).map(post => post.post_number).sort((a, b) => a - b),
  markdownSha256: createHash('sha256').update(markdown).digest('hex'),
  posts: posts.map(post => ({ id: post.id, number: post.post_number, updatedAt: post.updated_at })),
}
await mkdir(outputDirectory, { recursive: true })
await writeFile(new URL('01-patch-notes.md', outputDirectory), markdown)
await writeFile(new URL('source.json', outputDirectory), `${JSON.stringify(provenance, null, 2)}\n`)
console.log(`Imported ${posts.length} posts / ${titles.length} sections to ${fileURLToPath(outputDirectory)}`)
console.log('Review manifest.sectionMap and versionTopics before publishing new sections.')
