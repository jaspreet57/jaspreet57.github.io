import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import useColorMode from '../../hooks/useColorMode'
import useMediaQueryResult from '../../hooks/useMediaQueryResult'
import GoIcon from '../svg-components/custom-icons/GoIcon'
import { YoutubeIcon } from '../svg-components/feather-icons'

const TempSection: React.FC = () => {
  const colorMode = useColorMode()
  const { isMobileView } = useMediaQueryResult()

  return (
    <Box sx={{ marginTop: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography gutterBottom>
        Create React App with TypeScript{' '}
        {isMobileView ? 'is mobile view' : 'is desktop view'}
      </Typography>
      <Button
        onClick={colorMode.toggleColorMode}
        startIcon={
          <YoutubeIcon />
        }
      >
        Toggle Mode
      </Button>
      <GoIcon width="50px" />
    </Box>
  )
}

export default TempSection
