import Box from '@mui/material/Box'
import useMediaQueryResult from '../../../hooks/useMediaQueryResult'
import { SxProps, Theme, useTheme } from '@mui/material/styles'
import Link from '@mui/material/Link'
import { highlightedFont } from '../../../theme/variables'

const ContactBar: React.FC = () => {
  const { isMobileView } = useMediaQueryResult()
  const theme = useTheme()

  let BoxStyles: SxProps<Theme> = {
    orientation: 'left',
    width: '40px',
    position: 'fixed',
    left: 'auto',
    right: '20px',
    zIndex: 10,
    top: '70vh',
    transform: 'translate(0, -50%)',
  }

  let textBoxStyles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0px',
    padding: '0px',
    position: 'relative',
    color: theme.palette.primary.main,
    '::before, ::after': {
      content: '""',
      display: 'block',
      width: '1px',
      height: '100vh',
      margin: '0px auto',
      backgroundColor: theme.palette.primary.main,
    },
    a: {
      margin: '10px auto',
      padding: '10px',
      fontFamily: highlightedFont,
      letterSpacing: '0.2em',
      writingMode: 'vertical-rl',
    },
  }

  if (isMobileView) {
    BoxStyles = { display: 'none' }
  }

  return (
    <Box sx={BoxStyles}>
      <Box sx={textBoxStyles}>
        <Link href="mailto:erjaspreet57@gmail.com" underline="none">
          erjaspreet57@gmail.com
        </Link>
      </Box>
    </Box>
  )
}

export default ContactBar
