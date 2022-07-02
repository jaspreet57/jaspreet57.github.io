import { darken } from "@mui/material"

// typography
export const bodyFont = 'Open Sans'
export const highlightedFont = 'Ubuntu Mono'
export const boldTextWeight = 900


// colors
export const primaryMain = '#FF5C36'
export const secondaryMain = '#ff3676'

export const themeLight = '#faffe6'
export const themeLightPaper = '#e1f9ff'
export const themeDark = '#012e33'
export const themeDarkPaper = '#014e56'

// colors - dark mode
export const lightColors = {
    primary: primaryMain,
    secondary: secondaryMain,
    text: themeDark,
    background: themeLight,
    paper: themeLightPaper
}

// colors - dark mode
export const darkColors = {
    primary: primaryMain,
    secondary: secondaryMain,
    text: darken(themeLight, 0.2),
    background: themeDark,
    paper: themeDarkPaper
}


// page dimensions
export const drawerWidth = 240
