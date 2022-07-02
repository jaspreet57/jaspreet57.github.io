import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import useMediaQueryResult from './hooks/useMediaQueryResult'
import NavBar from './components/NavBar/NavBar'
import IntroSection from './components/IntroSection/IntroSection'
import TempSection from './components/TempSection/TempSection'

const App: React.FC = () => {
  const { isMobileView } = useMediaQueryResult()

  const containerPadding = isMobileView ? '0px' : '30px'

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <Container maxWidth="lg" component="main">
        {/** Below <Toolbar /> is used to add space at the top with the height equal to NavBar height */}
        <Toolbar />
        <Box
          sx={{
            my: 2,
            paddingLeft: containerPadding,
            paddingRight: containerPadding,
          }}
        >
          <IntroSection />
          <TempSection />
        </Box>
      </Container>
    </Box>
  )
}

export default App
