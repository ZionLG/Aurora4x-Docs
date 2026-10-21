import { useMemo } from 'react'
import { useSpoilerRegion } from '../hooks/useSpoilerRegion'
import { spoilerGlyph } from '../utils/spoilerAnimation'

/** Each letter reserves its original width; only the overlaid glyph changes. */
export default function SpoilerText({ children }: { children: string }) {
  const inRegion = useSpoilerRegion()
  const words = useMemo(() => children.split(/(\s+)/), [children])
  if (!inRegion) return children
  let index = 0
  return (
    <>
      {/* Read as prose, while the unselectable copy avoids duplicate clipboard text. */}
      <span className="sr-only select-none">{children}</span>
      <span className="spoiler-glyphs" aria-hidden="true">
        {words.map((word, wordIndex) => /\s/.test(word) ? word : (
          <span className="spoiler-word" key={wordIndex}>
            {Array.from(word).map(character => {
              const position = index++
              return <span className="spoiler-char" data-spoiler-char data-glyph={spoilerGlyph(position)} key={position}>{character}</span>
            })}
          </span>
        ))}
      </span>
    </>
  )
}
