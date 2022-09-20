import { useEffect, useState } from 'react'

const useScrollPosition = () => {
  const [position, setPosition] = useState<number>(0)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const setScrollPosition = () => {
      const position = window.scrollY;
      setPosition(position);
    }

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(setScrollPosition, 200);
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position
}

export default useScrollPosition
