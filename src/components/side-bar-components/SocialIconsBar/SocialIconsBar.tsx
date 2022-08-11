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
import Link from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip'

const SocialIconsBar: React.FC = () => {
  const { isMobileView } = useMediaQueryResult()
  const theme = useTheme()

  let BoxStyles: SxProps<Theme> = {
    orientation: 'left',
    width: '40px',
    position: 'fixed',
    left: '20px',
    right: 'auto',
    zIndex: 10,
    bottom: '0',
    '::before, ::after': {
      content: '""',
      display: 'block',
      width: '1px',
      height: '10vh',
      margin: '0px auto',
      backgroundColor: theme.palette.secondary.main,
    },
  }

  let ulStyles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0px',
    padding: '0px',
    listStyle: 'none',
    li: {
      marginTop: '5px',
      color: theme.palette.primary.main,
    },
    'li:first-of-type': {
      marginTop: '20px',
    },
    'li:last-of-type': {
      marginBottom: '15px',
    },
  }

  const hoverLinkStyles: SxProps<Theme> = {
    position: 'relative',
    display: 'inline-block',
    '&:hover': {
      transition: '0.3s all ease-in-out',
      color: theme.palette.text.primary,
      transform: 'translateX(5px)',
    },
  }

  if (isMobileView) {
    BoxStyles = { display: 'none' }
  }

  return (
    <Box sx={BoxStyles}>
      <Box component="ul" sx={ulStyles}>
        <Box component="li">
          <Tooltip title="Github" placement="right-start">
            <Link href="https://github.com/jaspreet57" target="_blank" underline="none" sx={hoverLinkStyles}>
              <GithubIcon />
            </Link>
          </Tooltip>
        </Box>
        <Box component="li">
          <Tooltip title="LinkedIn" placement="right-start">
            <Link href="https://www.linkedin.com/in/jaspreet-singh" target="_blank" underline="none" sx={hoverLinkStyles}>
              <LinkedInIcon />
            </Link>
          </Tooltip>
        </Box>{' '}
        <Box component="li">
          <Tooltip title="Facebook" placement="right-start">
            <Link href="https://www.facebook.com/jaspreet.s.saran" target="_blank" underline="none" sx={hoverLinkStyles}>
              <FacebookIcon />
            </Link>
          </Tooltip>
        </Box>{' '}
        <Box component="li">
          <Tooltip title="Instagram" placement="right-start">
            <Link href="https://www.instagram.com/jaspreet.s.saran" target="_blank" underline="none" sx={hoverLinkStyles}>
              <InstagramIcon />
            </Link>
          </Tooltip>
        </Box>
        <Box component="li">
          <Tooltip title="Twitter" placement="right-start">
            <Link href="https://twitter.com/erjaspreet57" target="_blank" underline="none" sx={hoverLinkStyles}>
              <TwitterIcon />
            </Link>
          </Tooltip>
        </Box>
        <Box component="li">
          <Tooltip title="Youtube" placement="right-start">
            <Link href="https://www.youtube.com/c/JaspreetSinghSaran/channels" target="_blank" underline="none" sx={hoverLinkStyles}>
              <YoutubeIcon />
            </Link>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default SocialIconsBar
