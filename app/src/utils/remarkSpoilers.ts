import { spoilerMarkerAction } from './spoilers'

interface MarkdownNode {
  type: string
  value?: string
  children?: MarkdownNode[]
  data?: {
    hName?: string
    hProperties?: Record<string, unknown>
    hChildren?: unknown[]
    [key: string]: unknown
  }
}

function spoilerNode(children: MarkdownNode[], block: boolean): MarkdownNode {
  return { type: 'spoiler', children, data: { hName: block ? 'div' : 'span', hProperties: { 'data-spoiler': true } } }
}

/** Group delimiter-separated sibling nodes, retaining links, emphasis and other Markdown. */
function groupSpoilers(nodes: MarkdownNode[], block: boolean): MarkdownNode[] {
  const result: MarkdownNode[] = []
  const stack: Array<{ opening: string; children: MarkdownNode[] }> = []

  const append = (node: MarkdownNode) => (stack.at(-1)?.children ?? result).push(node)
  const marker = (value: string) => {
    const action = spoilerMarkerAction(value, stack.at(-1)?.opening)
    if (action === 'close') {
      const frame = stack.pop()!
      append(spoilerNode(frame.children, block))
    } else if (action === 'open') {
      stack.push({ opening: value.toLowerCase(), children: [] })
    } else {
      append(block ? { type: 'paragraph', children: [{ type: 'text', value }] } : { type: 'text', value })
    }
  }

  for (const node of nodes) {
    if (block) {
      const text = node.type === 'paragraph' && node.children?.length === 1 && node.children[0].type === 'text'
        ? node.children[0].value?.trim() : undefined
      if (text && /^(?:\[\/?spoiler\]|\|\|)$/i.test(text)) marker(text)
      else append(node)
      continue
    }
    if (node.type !== 'text' || !node.value) {
      append(node)
      continue
    }
    const parts = node.value.split(/(\[\/?spoiler\]|\|\|)/gi)
    for (let index = 0; index < parts.length; index++) {
      if (!parts[index]) continue
      if (index % 2) marker(parts[index])
      else append({ type: 'text', value: parts[index] })
    }
  }

  while (stack.length) {
    const frame = stack.pop()!
    append(block ? { type: 'paragraph', children: [{ type: 'text', value: frame.opening }] } : { type: 'text', value: frame.opening })
    for (const child of frame.children) append(child)
  }
  return result
}

export default function remarkSpoilers() {
  return (tree: MarkdownNode) => {
    const transform = (node: MarkdownNode) => {
      if (!node.children || node.type === 'code' || node.type === 'inlineCode') return
      // Group block markers first; then process phrasing inside each retained block.
      const block = ['root', 'blockquote', 'listItem'].includes(node.type)
      node.children = groupSpoilers(node.children, block)
      for (const child of node.children) {
        if (child.type === 'spoiler') {
          for (const nested of child.children ?? []) transform(nested)
        } else transform(child)
      }
    }
    transform(tree)
  }
}

/** Wrap protected text leaves without replacing their Markdown layout or formatting. */
export function remarkScrambleText({ enabled = false }: { enabled?: boolean } = {}) {
  return (tree: MarkdownNode) => {
    const transform = (node: MarkdownNode, protectedText: boolean) => {
      const protectedNode = protectedText || node.type === 'spoiler'
      if (protectedNode && node.type === 'text') {
        node.data = {
          ...node.data,
          hName: 'span',
          hProperties: { ...node.data?.hProperties, 'data-spoiler-text': true },
        }
      } else if (protectedNode && (node.type === 'code' || node.type === 'inlineCode')) {
        // Keep the standard code handler's wrapper, language classes, and whitespace.
        const value = node.type === 'inlineCode'
          ? (node.value ?? '').replace(/\r?\n|\r/g, ' ')
          : node.value ? `${node.value}\n` : ''
        node.data = {
          ...node.data,
          hChildren: [{
            type: 'element',
            tagName: 'span',
            properties: { 'data-spoiler-text': true },
            children: [{ type: 'text', value }],
          }],
        }
      }
      for (const child of node.children ?? []) transform(child, protectedNode)
    }
    transform(tree, enabled)
  }
}
