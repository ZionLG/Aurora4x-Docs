import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkSpoilers, { remarkScrambleText } from '../utils/remarkSpoilers'
import { useSpoilerRegion } from '../hooks/useSpoilerRegion'
import Spoiler from './Spoiler'
import SpoilerText from './SpoilerText'

interface TextNode { value?: string; children?: TextNode[]; properties?: Record<string, unknown> }

function textContent(node: TextNode): string {
  if (node.value) return node.value
  return (node.children ?? []).map(textContent).join(' ')
}

function containsSpoiler(node: TextNode): boolean {
  return !!node.properties?.['data-spoiler'] || (node.children ?? []).some(containsSpoiler)
}

const spoilerComponents: Components = {
  a: ({ node, children, ...props }) => {
    const link = <a {...props}>{children}</a>
    // A spoiler in a link label must conceal the link's keyboard target too.
    return node && containsSpoiler(node)
      ? <Spoiler text={textContent(node)}>{link}</Spoiler>
      : link
  },
  span: ({ node, children, ...props }) => {
    if (node?.properties?.['data-spoiler-text']) return <SpoilerText>{textContent(node)}</SpoilerText>
    return node?.properties?.['data-spoiler']
      ? <Spoiler key={textContent(node)} text={textContent(node)}>{children}</Spoiler>
      : <span {...props}>{children}</span>
  },
  div: ({ node, children, ...props }) => node?.properties?.['data-spoiler']
    ? <Spoiler key={textContent(node)} text={textContent(node)} block>{children}</Spoiler>
    : <div {...props}>{children}</div>,
}

export default function DocsMarkdown({ children, components }: { children: string; components?: Components }) {
  const protectedRegion = useSpoilerRegion()
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkSpoilers, [remarkScrambleText, { enabled: protectedRegion }]]}
      components={{ ...components, ...spoilerComponents }}
    >
      {children}
    </ReactMarkdown>
  )
}
