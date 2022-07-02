import React from 'react'
import { createRoot } from 'react-dom/client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import App from './App'
import useThemeCreator from './hooks/useThemeCreator'
import ColorModeContext from './context/ColorModeContext'
import MediaQueryContext from './context/MediaQueryContext'
import useMediaQueryCreator from './hooks/useMediaQueryCreator'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

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

root.render(<RootComponent />)
