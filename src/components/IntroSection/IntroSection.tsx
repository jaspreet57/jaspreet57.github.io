import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ProfileHighlight from '../../components/svg-components/ProfileHighlight'
import useMediaQueryResult from '../../hooks/useMediaQueryResult'
import { SxProps, Theme } from '@mui/material/styles'
import { highlightedFont } from '../../theme/variables'

const IntroSection: React.FC = () => {
  const { isMobileView } = useMediaQueryResult()

  let profileBoxPositions: SxProps<Theme> = {}
  let ContainerBoxStyles: SxProps<Theme> = {}
  let IntroBoxStyles: SxProps<Theme> = {}

  if (!isMobileView) {
    IntroBoxStyles = {}
    ContainerBoxStyles = { paddingTop: '100px', display: 'flex' }
    profileBoxPositions = { width: '70%', right: '-50px', top: '25vh', zIndex: -2 }
  }

  return (
    <Box component="section" sx={ContainerBoxStyles}>
      <Box sx={IntroBoxStyles}>
        <Typography gutterBottom color="secondary" sx={{ fontSize: '30px', fontFamily: highlightedFont }}>
          Hi, my name is
        </Typography>
        <Typography gutterBottom sx={{ fontWeight: 900, fontSize: '80px' }}>
          Jaspreet Singh.
        </Typography>
      </Box>


      <Box sx={profileBoxPositions}>
        <Box sx={profileBoxPositions}>
          <ProfileHighlight />
        </Box>
      </Box>
    </Box>
  )
}

export default IntroSection
