import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ProfileHighlight from '../../components/svg-components/ProfileHighlight'
import useMediaQueryResult from '../../hooks/useMediaQueryResult'
import { SxProps, Theme } from '@mui/material/styles'
import { boldTextWeight, highlightedFont } from '../../theme/variables'
import Button from '@mui/material/Button'

const IntroSection: React.FC = () => {
  const { isMobileView } = useMediaQueryResult()

  let ContainerBoxStyles: SxProps<Theme> = {}
  let IntroBoxStyles: SxProps<Theme> = { textAlign: 'center' }
  let ProfileBoxStyles: SxProps<Theme> = {}
  let profileBoxPositions: SxProps<Theme> = {}

  if (!isMobileView) {
    ContainerBoxStyles = { paddingTop: '100px', display: 'flex' }
    IntroBoxStyles = { width: '55%' }
    ProfileBoxStyles = { width: '45%', zIndex: -2 }
    profileBoxPositions = { margin: '10px -40px 0 -50px' }
  }

  return (
    <Box component="section" sx={ContainerBoxStyles}>
      <Box sx={IntroBoxStyles} component="header">
        <Typography color="primary" sx={{ fontSize: '20px', fontWeight: boldTextWeight, fontFamily: highlightedFont }}>
          Hi, my name is
        </Typography>
        <Typography component="h1" color="secondary" sx={{ fontWeight: boldTextWeight, fontSize: '70px' }}>
          Jaspreet Singh.
        </Typography>
        <Typography component="h2" gutterBottom sx={{ fontWeight: boldTextWeight, fontSize: '36px' }}>
          I'm a Javascript Developer.
        </Typography>
        <Typography component="p" sx={{ fontSize: '20px' }} gutterBottom>
          I’m a software engineer specializing in building and designing web apps. Currently, I’m focused on developing
          cloud solutions that helps IOT devices and mobile apps to communicate with each other.
        </Typography>
        <Box display="flex" justifyContent={isMobileView ? 'center': 'flex-end'} mt={3} mb={isMobileView ? 3 : 0}>
          <Button variant="outlined" color="primary" size="large" sx={{ fontSize: '20px', textTransform: 'none' }}>
            Download Resume
          </Button>
        </Box>
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
