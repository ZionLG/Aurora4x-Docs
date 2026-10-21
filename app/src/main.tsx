import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from './components/theme-provider'
import SpoilerProvider from './components/SpoilerProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="aurora-ui-theme">
      <SpoilerProvider>
        <App />
      </SpoilerProvider>
    </ThemeProvider>
  </StrictMode>,
)
