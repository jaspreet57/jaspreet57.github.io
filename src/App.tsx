import React, { useContext } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ColorModeContext from './theme/ColorModeContext'

const App: React.FC = () => {
  const colorMode = useContext(ColorModeContext)

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography gutterBottom>
          Create React App with TypeScript
        </Typography>
        <Button onClick={colorMode.toggleColorMode}>Toggle Mode</Button>
      </Box>
    </Container>
  )
}

export default App
