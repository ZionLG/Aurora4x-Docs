import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { SpoilerContext } from '../hooks/useSpoilers'

const STORAGE_KEY = 'aurora-always-show-spoilers'

function readPreference(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    // Storage may be unavailable in private or restricted browsers. Hide by default.
    return false
  }
}

export default function SpoilerProvider({ children }: { children: ReactNode }) {
  const [alwaysShowSpoilers, setShow] = useState(readPreference)
  const setAlwaysShowSpoilers = useCallback((show: boolean) => {
    setShow(show)
    try {
      localStorage.setItem(STORAGE_KEY, String(show))
    } catch {
      // The preference still works for this session if storage is blocked.
    }
  }, [])

  useEffect(() => {
    const syncPreference = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) setShow(readPreference())
    }
    window.addEventListener('storage', syncPreference)
    return () => window.removeEventListener('storage', syncPreference)
  }, [])

  const value = useMemo(() => ({ alwaysShowSpoilers, setAlwaysShowSpoilers }), [alwaysShowSpoilers, setAlwaysShowSpoilers])
  return <SpoilerContext.Provider value={value}>{children}</SpoilerContext.Provider>
}
