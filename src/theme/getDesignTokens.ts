import { PaletteMode } from '@mui/material'
import amber from '@mui/material/colors/amber'
import deepOrange from '@mui/material/colors/deepOrange'
import grey from '@mui/material/colors/grey'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#FF5C36',
          },
          secondary: {
            main: '#ff3676',
          },
          text: {
            primary: '#012e33',
            secondary: '#012e33',
            disabled: '#012e33',
            hint: '#012e33',
          },
          background: {
            default: '#faffe6',
            paper: '#e1f9ff',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#FF5C36',
          },
          secondary: {
            main: '#ff3676',
          },
          text: {
            primary: '#faffe6',
            secondary: '#faffe6',
            disabled: '#faffe6',
            hint: '#faffe6',
          },
          background: {
            default: '#012e33',
            paper: '#014e56',
          },
        }),
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontFamily: 'Ubuntu Mono',
    },
    h2: {
      fontFamily: 'Ubuntu Mono',
    },
    h3: {
      fontFamily: 'Ubuntu Mono',
    },
    h4: {
      fontFamily: 'Ubuntu Mono',
    },
    h6: {
      fontFamily: 'Ubuntu Mono',
    },
    h5: {
      fontFamily: 'Ubuntu Mono',
    },
    subtitle1: {
      fontFamily: 'Ubuntu Mono',
    },
    subtitle2: {
      fontFamily: 'Ubuntu Mono',
    },
    button: {
      fontFamily: 'Ubuntu Mono',
      fontWeight: 900,
    },
    overline: {
      fontFamily: 'Ubuntu Mono',
    },
  },
})

export default getDesignTokens
