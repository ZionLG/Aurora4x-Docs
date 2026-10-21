import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react'
import { useSpoilers } from '../hooks/useSpoilers'
import { SpoilerRegionContext, useSpoilerRegion } from '../hooks/useSpoilerRegion'
import { animateSpoiler } from '../utils/spoilerAnimation'

interface Props {
  children: ReactNode
  text: string
  block?: boolean
}

export default function Spoiler(props: Props) {
  // Nested spoilers share the surrounding section's reveal control.
  const inRegion = useSpoilerRegion()
  return inRegion ? props.children : <SpoilerRegion {...props} />
}

function SpoilerRegion({ children, block = false }: Props) {
  const { alwaysShowSpoilers } = useSpoilers()
  const [revealed, setRevealed] = useState(false)
  const [revealing, setRevealing] = useState(false)
  const rootRef = useRef<HTMLDivElement & HTMLSpanElement>(null)
  const visible = alwaysShowSpoilers || revealed
  const state = visible ? 'revealed' : revealing ? 'revealing' : 'hidden'
  const Wrapper = block ? 'div' : 'span'

  useEffect(() => {
    if (visible || !revealing || !rootRef.current) return
    return animateSpoiler(rootRef.current, true, () => {
      setRevealed(true)
      setRevealing(false)
    })
  }, [visible, revealing])

  const reveal = (event: MouseEvent | KeyboardEvent) => {
    if (visible) return
    // The first press reveals a linked passage; it must not also open its link.
    event.preventDefault()
    event.stopPropagation()
    setRevealing(true)
  }

  return (
    <Wrapper
      ref={rootRef}
      className={block ? 'spoiler-region spoiler-passage' : 'spoiler-region'}
      data-spoiler-region
      data-state={state}
      role={visible ? undefined : 'button'}
      tabIndex={visible ? undefined : 0}
      aria-label={visible ? undefined : block ? 'Reveal spoiler section' : 'Reveal spoiler'}
      aria-expanded={visible ? undefined : false}
      aria-busy={revealing && !visible ? true : undefined}
      title={visible ? undefined : `Click or press Enter to reveal this ${block ? 'section' : 'spoiler'}`}
      onClick={reveal}
      onKeyDown={event => {
        if (event.key === 'Enter' || event.key === ' ') reveal(event)
      }}
    >
      <SpoilerRegionContext.Provider value={true}>
        <Wrapper className="spoiler-content" aria-hidden={!visible || undefined} inert={!visible || undefined}>
          {children}
        </Wrapper>
      </SpoilerRegionContext.Provider>
    </Wrapper>
  )
}
