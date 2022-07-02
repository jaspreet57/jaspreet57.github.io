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
      h1: {
        fontFamily: highlightedFont,
      },
      h2: {
        fontFamily: highlightedFont,
      },
      h3: {
        fontFamily: highlightedFont,
      },
      h4: {
        fontFamily: highlightedFont,
      },
      h6: {
        fontFamily: highlightedFont,
      },
      h5: {
        fontFamily: highlightedFont,
      },
      subtitle1: {
        fontFamily: highlightedFont,
      },
      subtitle2: {
        fontFamily: highlightedFont,
      },
      button: {
        fontFamily: highlightedFont,
        fontWeight: boldTextWeight,
      },
      overline: {
        fontFamily: highlightedFont,
      },
    },
  })
}

export default getDesignTokens
