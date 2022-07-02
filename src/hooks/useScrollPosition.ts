import { useEffect, useState } from 'react'

const useScrollPosition = () => {
  const [position, setPosition] = useState<number>(0)

  useEffect(() => {
    const setScrollPosition = () => {
        const position = window.scrollY;
        setPosition(position);
    }

    setScrollPosition()
    window.addEventListener('scroll', setScrollPosition, { passive: true })

    return () => {
      window.removeEventListener('scroll', setScrollPosition)
    }
  }, [])

  return position
}

export default useScrollPosition
