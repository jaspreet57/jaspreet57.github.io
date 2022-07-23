import { darken } from "@mui/material"

export const colorThemes = {
    themeOriginal: {
        light: {
            primary: '#FF5C36',
            secondary: '#ff3676',
            text: '#012e33',
            background: '#faffe6',
            paper: '#e1f9ff'
        },
        dark: {
            primary: '#FF5C36',
            secondary: '#ff3676',
            text: darken('#faffe6', 0.2),
            background: '#012e33',
            paper: '#014e56'
        }
    },
    themeNew: {
        light: {
            primary: '#FF5C36',
            secondary: '#ff3676',
            text: '#012e33',
            background: '#faffe6',
            paper: '#e1f9ff'
        },
        dark: {
            primary: '#FF5C36',
            secondary: '#ff3676',
            text: darken('#faffe6', 0.2),
            background: '#022E40',
            paper: '#014e56'
        }
    },
    theme1: {
        light: {
            primary: '#AF252C',
            secondary: '#AF0009',
            text: '#AF6D27',
            background:  '#EEEBDD',
            paper: '#CE706B',
        },
        dark: {
            primary: '#F23C13',
            secondary: '#FFFFFF',
            text: '#faffe6',
            background: '#022E40',
            paper: '#023059'
        }
    },
}

export const selectedTheme = colorThemes.themeNew