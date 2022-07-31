import React from 'react'

export interface MediaQueryContextProps {
  isMobileView: boolean
}

const MediaQueryContext = React.createContext<MediaQueryContextProps>({ isMobileView: false })

export default MediaQueryContext
