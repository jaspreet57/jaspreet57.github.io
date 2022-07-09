import { PaletteMode } from '@mui/material'
import {
  bodyFont,
  boldTextWeight,
  darkColors,
  highlightedFont,
  lightColors,
} from './variables'

const getDesignTokens = (mode: PaletteMode) => {
  const colors = mode === 'light' ? lightColors : darkColors

  return ({
    palette: {
      mode,
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
      text: {
        primary: colors.text,
        secondary: colors.text,
        disabled: colors.text,
        hint: colors.text,
      },
      background: {
        default: colors.background,
        paper: colors.paper
      },
    },
    typography: {
      fontFamily: bodyFont,
      button: {
        fontFamily: highlightedFont,
        fontWeight: boldTextWeight,
      }
    },
  })
}

export default getDesignTokens
