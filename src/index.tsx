import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import App from './App'
import useThemeCreator from './hooks/useThemeCreator'
import ColorModeContext from './context/ColorModeContext'
import MediaQueryContext from './context/MediaQueryContext'
import useMediaQueryCreator from './hooks/useMediaQueryCreator'

import './index.css'

const rootElement = document.getElementById('root')

const RootComponent: React.FC = () => {
  const [theme, colorMode] = useThemeCreator()
  const initialMediaQueryResult = useMediaQueryCreator()

  return (
    <React.StrictMode>
      <ColorModeContext.Provider value={colorMode}>
        <MediaQueryContext.Provider value={initialMediaQueryResult}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </MediaQueryContext.Provider>
      </ColorModeContext.Provider>
    </React.StrictMode>
  )
}

if (rootElement?.hasChildNodes()) {
  hydrateRoot(rootElement, <RootComponent />)
} else {
  const root = createRoot(rootElement!)
  root.render(<RootComponent />)
}
