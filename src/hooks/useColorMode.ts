import { useContext } from 'react'
import ColorModeContext from '../context/ColorModeContext'

const useColorMode= () => {
  const colorMode = useContext(ColorModeContext)

  return colorMode
}

export default useColorMode
