import React from 'react'
import { darken, useTheme } from '@mui/material/styles'

const Logo: React.FC = () => {
  const theme = useTheme()

  return (
    <svg id="eMeiyQoqvw01" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 400" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
    <defs>
        <filter id="eMeiyQoqvw02-filter" x="-150%" width="400%" y="-150%" height="400%">
            <feGaussianBlur id="eMeiyQoqvw02-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="5,5" />
            <feOffset id="eMeiyQoqvw02-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp" />
            <feFlood id="eMeiyQoqvw02-filter-drop-shadow-0-flood" flood-color="#ff5c36" />
            <feComposite id="eMeiyQoqvw02-filter-drop-shadow-0-composite" operator="in" in2="tmp" />
            <feMerge id="eMeiyQoqvw02-filter-drop-shadow-0-merge">
                <feMergeNode id="eMeiyQoqvw02-filter-drop-shadow-0-merge-node-1" />
                <feMergeNode id="eMeiyQoqvw02-filter-drop-shadow-0-merge-node-2" in="SourceGraphic" />
            </feMerge>
        </filter>
        <filter id="eMeiyQoqvw03-filter" x="-150%" width="400%" y="-150%" height="400%">
            <feGaussianBlur id="eMeiyQoqvw03-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="1,1" />
            <feOffset id="eMeiyQoqvw03-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp" />
            <feFlood id="eMeiyQoqvw03-filter-drop-shadow-0-flood" flood-color="rgba(255,92,54,0.83)" />
            <feComposite id="eMeiyQoqvw03-filter-drop-shadow-0-composite" operator="in" in2="tmp" />
            <feMerge id="eMeiyQoqvw03-filter-drop-shadow-0-merge">
                <feMergeNode id="eMeiyQoqvw03-filter-drop-shadow-0-merge-node-1" />
                <feMergeNode id="eMeiyQoqvw03-filter-drop-shadow-0-merge-node-2" in="SourceGraphic" />
            </feMerge>
        </filter>
    </defs>
    <polygon points="287.877751,-287.41589 406.794028,-238.159155 456.050763,-119.242878 406.794028,-0.326601 0,168.173012 -118.916277,118.916277 -168.173012,0 -118.916277,-118.916277 287.877751,-287.41589" transform="matrix(.92388 0.382683-.382683 0.92388 163.887475 215.106656)" filter="url(#eMeiyQoqvw02-filter)" fill="none" stroke="#ff5c36" stroke-width="3" />
    <text dx="0" dy="0" font-family="Open Sans" font-size="28" font-weight="300" transform="matrix(6.474164 0 0 6.558078 85.811143 269.283441)" filter="url(#eMeiyQoqvw03-filter)" fill="#ff5c36" stroke-width="0">
        <tspan y="0" font-weight="300" stroke-width="0">
            JSingh
        </tspan>
    </text>
</svg>
  )
}

export default Logo
