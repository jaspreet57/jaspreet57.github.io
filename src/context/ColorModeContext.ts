import React from 'react'

export interface ColorModeContextProps {
  toggleColorMode: () => void
}

const ColorModeContext = React.createContext<ColorModeContextProps>({ toggleColorMode: () => {} })

export default ColorModeContext
