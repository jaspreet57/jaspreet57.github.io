import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ProfileHighlight from '../../components/svg-components/ProfileHighlight'
import useMediaQueryResult from '../../hooks/useMediaQueryResult'
import { SxProps, Theme } from '@mui/material/styles'
import { boldTextWeight, highlightedFont } from '../../theme/variables'

const IntroSection: React.FC = () => {
  const { isMobileView } = useMediaQueryResult()

  let ContainerBoxStyles: SxProps<Theme> = {}
  let IntroBoxStyles: SxProps<Theme> = { textAlign: 'center' }
  let ProfileBoxStyles: SxProps<Theme> = {}
  let profileBoxPositions: SxProps<Theme> = {}
  
  
  if (!isMobileView) {
    ContainerBoxStyles = { paddingTop: '100px', display: 'flex' }
    IntroBoxStyles = { width: '50%' }
    ProfileBoxStyles = { width: '50%' }
    profileBoxPositions = { zIndex: -2, margin: '0 -45px' }
  }

  return (
    <Box component="section" sx={ContainerBoxStyles}>
      <Box sx={IntroBoxStyles}>
        <Typography color="secondary" sx={{ fontSize: '30px' }}>
          Hi, my name is
        </Typography>
        <Typography component="h1" sx={{ fontWeight: boldTextWeight, fontSize: '70px' }}>
          Jaspreet Singh.
        </Typography>
      </Box>


      <Box sx={ProfileBoxStyles}>
        <Box sx={profileBoxPositions}>
          <ProfileHighlight />
        </Box>
      </Box>
    </Box>
  )
}

export default IntroSection
