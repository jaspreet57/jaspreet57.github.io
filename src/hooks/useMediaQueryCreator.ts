import { useEffect, useState } from 'react'
import { MediaQueryContextProps } from '../context/MediaQueryContext'

const useMediaQueryCreator = () => {
  const [state, setState] = useState<MediaQueryContextProps>({
    isMobileView: false,
  })

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, isMobileView: true }))
        : setState((prevState) => ({ ...prevState, isMobileView: false }))
    }

    setResponsiveness()
    window.addEventListener('resize', () => setResponsiveness())

    return () => {
      window.removeEventListener('resize', () => setResponsiveness())
    }
  }, [])

  return state
}

export default useMediaQueryCreator
