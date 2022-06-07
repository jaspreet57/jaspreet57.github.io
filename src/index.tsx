import React from 'react'
import { createRoot } from 'react-dom/client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import App from './App'
import useThemeCreator from './theme/useThemeCreator'
import ColorModeContext from './theme/ColorModeContext'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

const RootComponent: React.FC = () => {
  const [theme, colorMode] = useThemeCreator()

  return (
    <React.StrictMode>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.StrictMode>
  )
}

root.render(<RootComponent />)
