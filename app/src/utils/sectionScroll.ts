/** Keep a linked section below sticky controls while asynchronous content settles. */
export function trackSectionAnchor(container: HTMLElement, content: HTMLElement, slug: string): () => void {
  const doc = container.ownerDocument
  const target = doc.getElementById(`s-${slug}`)
  if (!target || !content.contains(target)) return () => {}

  // A link to a collapsed patch should expose the patch, but never reveal a spoiler.
  const firstChild = target.firstElementChild
  const details = firstChild?.tagName === 'DETAILS'
    ? firstChild as HTMLDetailsElement
    : target.querySelector<HTMLDetailsElement>(':scope > [data-spoiler-region] > .spoiler-content > details')
  if (details) details.open = true

  let active = true
  let frame: number | null = null
  const stickyControls = [...container.querySelectorAll<HTMLElement>('[data-scroll-sticky]')]
  const align = () => {
    frame = null
    if (!active || !target.isConnected) return
    const offset = stickyControls.reduce((height, element) => height + element.getBoundingClientRect().height, 0) + 16
    const top = Math.max(0, container.scrollTop + target.getBoundingClientRect().top - container.getBoundingClientRect().top - offset)
    if (Math.abs(top - container.scrollTop) > 0.5) {
      container.scrollTo({ top, behavior: 'instant' })
    }
  }
  const schedule = () => {
    if (active && frame === null) frame = requestAnimationFrame(align)
  }
  const observer = new ResizeObserver(schedule)
  observer.observe(content)
  observer.observe(container)
  stickyControls.forEach(element => observer.observe(element))
  content.addEventListener('load', schedule, true)
  content.addEventListener('error', schedule, true)
  doc.fonts?.ready.then(schedule)
  doc.fonts?.addEventListener('loadingdone', schedule)

  const stop = () => {
    if (!active) return
    active = false
    if (frame !== null) cancelAnimationFrame(frame)
    observer.disconnect()
    content.removeEventListener('load', schedule, true)
    content.removeEventListener('error', schedule, true)
    doc.fonts?.removeEventListener('loadingdone', schedule)
    doc.removeEventListener('wheel', stop, true)
    doc.removeEventListener('touchstart', stop, true)
    doc.removeEventListener('pointerdown', stop, true)
    doc.removeEventListener('keydown', onKey, true)
  }
  const onKey = (event: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) stop()
  }
  // Once the reader takes control, late loads must not pull them back to the link.
  doc.addEventListener('wheel', stop, { passive: true, capture: true })
  doc.addEventListener('touchstart', stop, { passive: true, capture: true })
  doc.addEventListener('pointerdown', stop, { passive: true, capture: true })
  doc.addEventListener('keydown', onKey, true)
  schedule()
  return stop
}
