import { useContext } from 'react'
import MediaQueryContext from '../context/MediaQueryContext'

const useMediaQueryResult = () => {
  const result = useContext(MediaQueryContext)
  return result
}

export default useMediaQueryResult
