import { createContext, useContext } from 'react'

interface SpoilerPreferences {
  alwaysShowSpoilers: boolean
  setAlwaysShowSpoilers: (show: boolean) => void
}

export const SpoilerContext = createContext<SpoilerPreferences>({
  alwaysShowSpoilers: false,
  setAlwaysShowSpoilers: () => {},
})

export function useSpoilers() {
  return useContext(SpoilerContext)
}
