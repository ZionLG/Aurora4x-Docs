import { useCallback, useEffect, useRef, type RefObject } from 'react'
import { docsPathFromLocation } from '../utils/shareLinks'
import { trackSectionAnchor } from '../utils/sectionScroll'

export function useSectionNavigation(
  containerRef: RefObject<HTMLElement | null>,
  contentRef: RefObject<HTMLDivElement | null>,
  ready: boolean,
  renderedSections: readonly { title: string }[],
) {
  const stopTracking = useRef<(() => void) | null>(null)
  const navigate = useCallback((slug: string | null) => {
    stopTracking.current?.()
    stopTracking.current = null
    const container = containerRef.current
    const content = contentRef.current
    if (!container || !content) return
    if (!slug) {
      container.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    stopTracking.current = trackSectionAnchor(container, content, slug)
  }, [containerRef, contentRef])

  useEffect(() => {
    if (!ready) return
    const followLocation = () => {
      const parts = docsPathFromLocation(window.location).slice(1).split('/')
      navigate(parts[0] === 'changelog' ? parts[3] || null : parts[2] || null)
    }
    followLocation()
    window.addEventListener('hashchange', followLocation)
    window.addEventListener('popstate', followLocation)
    return () => {
      window.removeEventListener('hashchange', followLocation)
      window.removeEventListener('popstate', followLocation)
      stopTracking.current?.()
    }
  }, [ready, renderedSections, navigate])

  return navigate
}
