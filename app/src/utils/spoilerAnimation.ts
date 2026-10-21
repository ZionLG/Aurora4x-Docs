const GLYPHS = '⋄⟡⟢⟣⟤⟥⨝⋈⋉⋊⊹⌁⋮∷'

export function spoilerGlyph(index: number, frame = 0): string {
  const offset = Math.trunc(index) * 11 + Math.trunc(frame) * 5
  return GLYPHS[((offset % GLYPHS.length) + GLYPHS.length) % GLYPHS.length]
}

function stagger(index: number): number {
  // A stable integer hash distributes nearby characters across the transition.
  let value = Math.imul(index + 1, 0x45d9f3b)
  value = Math.imul(value ^ (value >>> 16), 0x45d9f3b)
  return ((value ^ (value >>> 16)) >>> 0) / 0x100000000
}

/** Animate glyph overlays without modifying the characters that determine layout. */
export function animateSpoiler(root: HTMLElement, reveal: boolean, onComplete: () => void): () => void {
  const characters = Array.from(root.querySelectorAll<HTMLElement>('[data-spoiler-char]'))
    .filter(character => character.closest('[data-spoiler-region]') === root)
  const view = root.ownerDocument.defaultView
  let active = true
  let frameId: number | undefined

  const resolved = (character: HTMLElement) => character.getAttribute('data-resolved') === 'true'
  const setResolved = (character: HTMLElement, show: boolean) => {
    if (show) character.setAttribute('data-resolved', 'true')
    else character.removeAttribute('data-resolved')
  }
  const complete = () => {
    if (!active) return
    active = false
    characters.forEach((character, index) => {
      setResolved(character, reveal)
      character.setAttribute('data-glyph', spoilerGlyph(index))
    })
    onComplete()
  }
  const cancel = () => {
    active = false
    if (view && frameId !== undefined) view.cancelAnimationFrame(frameId)
  }

  const pending = characters.map((character, index) => ({ character, index }))
    .filter(({ character }) => resolved(character) !== reveal)
  const reducedMotion = view?.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (!view || reducedMotion || pending.length === 0) {
    complete()
    return cancel
  }

  const duration = reveal ? 800 : 450
  let start: number | undefined
  let lastGlyphFrame = -1

  characters.forEach((character, index) => {
    if (!character.hasAttribute('data-glyph')) character.setAttribute('data-glyph', spoilerGlyph(index))
  })

  const tick = (timestamp: number) => {
    if (!active) return
    start ??= timestamp
    const elapsed = timestamp - start
    if (elapsed >= duration) {
      complete()
      return
    }

    for (const { character, index } of pending) {
      const threshold = duration * (0.08 + stagger(index) * 0.9)
      if (elapsed >= threshold) setResolved(character, reveal)
    }

    const glyphFrame = Math.floor(elapsed / 40)
    if (glyphFrame !== lastGlyphFrame) {
      characters.forEach((character, index) => {
        if (!resolved(character)) character.setAttribute('data-glyph', spoilerGlyph(index, glyphFrame))
      })
      lastGlyphFrame = glyphFrame
    }
    frameId = view.requestAnimationFrame(tick)
  }
  frameId = view.requestAnimationFrame(tick)
  return cancel
}
