import React from 'react'
import { useTheme } from '@mui/material/styles'

const Logo: React.FC = () => {
  const theme = useTheme()

  return (
    <svg id="eMeiyQoqvw01" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 400" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
        <defs>
            <filter id="eMeiyQoqvw03-filter" x="-150%" width="400%" y="-150%" height="400%">
                <feGaussianBlur id="eMeiyQoqvw03-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="1,1" />
                <feOffset id="eMeiyQoqvw03-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp" />
                <feFlood id="eMeiyQoqvw03-filter-drop-shadow-0-flood" flood-color={theme.palette.primary.main} />
                <feComposite id="eMeiyQoqvw03-filter-drop-shadow-0-composite" operator="in" in2="tmp" />
                <feMerge id="eMeiyQoqvw03-filter-drop-shadow-0-merge">
                    <feMergeNode id="eMeiyQoqvw03-filter-drop-shadow-0-merge-node-1" />
                    <feMergeNode id="eMeiyQoqvw03-filter-drop-shadow-0-merge-node-2" in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <text dx="0" dy="0" font-family="Open Sans" font-size="28" font-weight="300" transform="matrix(6.474164 0 0 6.558078 85.811143 269.283441)" filter="url(#eMeiyQoqvw03-filter)" fill={theme.palette.primary.main} stroke-width="0" >
            <tspan y="0" font-weight="300" stroke-width="0" textDecoration="underline">
                JSingh
            </tspan>
        </text>
    </svg>
  )
}

export default Logo
