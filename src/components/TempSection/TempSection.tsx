import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import ProfileHighlight from '../../components/svg-components/ProfileHighlight'
import useColorMode from '../../hooks/useColorMode'
import useMediaQueryResult from '../../hooks/useMediaQueryResult'
import Logo from '../../components/svg-components/Logo'

const TempSection: React.FC = () => {
  const colorMode = useColorMode()
  const { isMobileView } = useMediaQueryResult()

  return (
    <Box>
      <Typography gutterBottom>
        Create React App with TypeScript{' '}
        {isMobileView ? 'is mobile view' : 'is desktop view'}
      </Typography>
      <Button onClick={colorMode.toggleColorMode}>Toggle Mode</Button>
      <Box>
        <ProfileHighlight />
      </Box>

      <Box sx={{ width: 300, height: 300 }}>
        <Logo />
      </Box>
    </Box>
  )
}

export default TempSection
