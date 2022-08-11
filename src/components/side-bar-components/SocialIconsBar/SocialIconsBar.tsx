import Box from '@mui/material/Box'
import useMediaQueryResult from '../../../hooks/useMediaQueryResult'
import { SxProps, Theme, useTheme } from '@mui/material/styles'
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
  YoutubeIcon,
} from '../../svg-components/feather-icons'

const SocialIconsBar: React.FC = () => {
  const { isMobileView } = useMediaQueryResult()
  const theme = useTheme()

  let BoxStyles: SxProps<Theme> = {
    orientation: 'left',
    width: '40px',
    position: 'fixed',
    left: '40px',
    right: 'auto',
    zIndex: 10,
    top: '70vh',
    transform: 'translate(-50%, -50%)',
  }

  let ulStyles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0px',
    padding: '0px',
    listStyle: 'none',
    color: theme.palette.primary.main,
    '::before, ::after': {
      content: '""',
      display: 'block',
      width: '1px',
      height: '100vh',
      margin: '0px auto',
      backgroundColor: theme.palette.primary.main,
    },
    'li': {
      marginTop: '5px'
    },
    'li:first-of-type': {
      marginTop: '20px',
    },
    'li:last-of-type': {
      marginBottom: '15px',
    },
  }

  if (isMobileView) {
    BoxStyles = { display: 'none' }
  }

  return (
    <Box sx={BoxStyles}>
      <Box component="ul" sx={ulStyles}>
        <Box component="li">
          <GithubIcon />
        </Box>
        <Box component="li">
          <LinkedInIcon />
        </Box>{' '}
        <Box component="li">
          <FacebookIcon />
        </Box>{' '}
        <Box component="li">
          <InstagramIcon />
        </Box>
        <Box component="li">
          <TwitterIcon />
        </Box>
        <Box component="li">
          <YoutubeIcon />
        </Box>
      </Box>
    </Box>
  )
}

export default SocialIconsBar
