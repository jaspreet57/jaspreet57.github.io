import Box from '@mui/material/Box'
import useMediaQueryResult from '../../../hooks/useMediaQueryResult'
import { SxProps, Theme, useTheme } from '@mui/material/styles'
import Link from '@mui/material/Link'
import { highlightedFont } from '../../../theme/variables'
import Tooltip from '@mui/material/Tooltip'

const ContactBar: React.FC = () => {
  const { isMobileView } = useMediaQueryResult()
  const theme = useTheme()

  let BoxStyles: SxProps<Theme> = {
    orientation: 'right',
    width: '40px',
    position: 'fixed',
    left: 'auto',
    right: '20px',
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

  let textBoxStyles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0px',
    padding: '0px',
    position: 'relative',
    a: {
      margin: '10px auto',
      padding: '10px',
      fontFamily: highlightedFont,
      letterSpacing: '0.2em',
      writingMode: 'vertical-rl',
      color: theme.palette.primary.main,
    },
  }

  const hoverLinkStyles: SxProps<Theme> = {
    position: 'relative',
    display: 'inline-block',
    '&:hover': {
      transition: '0.3s all ease-in-out',
      color: theme.palette.text.primary,
      transform: 'translateX(-5px)',
    },
  }

  if (isMobileView) {
    BoxStyles = { display: 'none' }
  }

  return (
    <Box sx={BoxStyles}>
      <Box sx={textBoxStyles}>
        <Tooltip title="Email Me" placement="left">
          <Link href="mailto:erjaspreet57@gmail.com" underline="none" sx={hoverLinkStyles}>
            erjaspreet57@gmail.com
          </Link>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default ContactBar
