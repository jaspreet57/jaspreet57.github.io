import { PaletteMode } from '@mui/material'
import { createTheme, Theme } from '@mui/material/styles'
import { useMemo, useState } from 'react'
import { ColorModeContextProps } from './ColorModeContext'
import getDesignTokens from './getDesignTokens'

// A custom theme hook for this app
const useThemeCreator = (): [Theme, ColorModeContextProps] => {
  const [mode, setMode] = useState<PaletteMode>('light')

  const colorMode = useMemo<ColorModeContextProps>(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const theme = useMemo<Theme>(() => createTheme(getDesignTokens(mode)), [mode])

  return [theme, colorMode]
}

export default useThemeCreator
