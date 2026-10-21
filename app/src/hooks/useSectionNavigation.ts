import { useCallback, useEffect, useRef, type RefObject } from 'react'
import { normalizeDocsHash } from '../utils/shareLinks'
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
    const followHash = () => {
      const parts = normalizeDocsHash(window.location.hash).replace(/^#/, '').split('/')
      navigate(parts[0] === 'changelog' ? parts[3] || null : parts[2] || null)
    }
    followHash()
    window.addEventListener('hashchange', followHash)
    window.addEventListener('popstate', followHash)
    return () => {
      window.removeEventListener('hashchange', followHash)
      window.removeEventListener('popstate', followHash)
      stopTracking.current?.()
    }
  }, [ready, renderedSections, navigate])

  return navigate
}
