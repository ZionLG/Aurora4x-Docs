import { createContext, useContext } from 'react'

export const SpoilerRegionContext = createContext(false)

export const useSpoilerRegion = () => useContext(SpoilerRegionContext)
