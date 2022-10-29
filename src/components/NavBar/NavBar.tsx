import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import Toolbar from '@mui/material/Toolbar'
import Slide from '@mui/material/Slide'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { boldTextWeight, drawerWidth, highlightedFont } from '../../theme/variables'
import useTheme from '@mui/material/styles/useTheme'
import { alpha } from '@mui/material/styles'
import useScrollPosition from '../../hooks/useScrollPosition'
import { lighten, Link } from '@mui/material'
import useColorMode from '../../hooks/useColorMode'

const navItems = ['Home', 'About', 'Contact']

const DrawerContent: React.FC<{ handleDrawerToggle: () => void }> = ({ handleDrawerToggle }) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        𝕵ɑรpʀɛɛt 𝕾iɳgɦ
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', fontFamily: highlightedFont }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const trigger = useScrollTrigger()
  const scrollPosition = useScrollPosition()
  const theme = useTheme()
  const colorMode = useColorMode()

  const handleDrawerToggle = () => {
    setIsOpen((value) => !value)
  }

  const shouldElevate = scrollPosition > 50

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          component="nav"
          sx={{ background: alpha(theme.palette.background.default, shouldElevate ? 0.9 : 1) }}
          elevation={shouldElevate ? 4 : 0}
        >
          <Toolbar>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
              <Link
                sx={{
                  width: '200px',
                  fontWeight: boldTextWeight,
                  fontSize: '20px',
                  textDecoration: 'none',
                  display: { xs: 'none', md: 'flex' },
                  transition: '0.3s all',
                  ':hover': {
                    textShadow: `1px 1px 6px ${lighten(theme.palette.mode === 'dark' ? '#595100' : '#FF0000', 0.2)}`,
                  }
                }}
                href="./"
              >
                𝕵ɑรpʀɛɛt 𝕾iɳgɦ
              </Link>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: 'primary', textTransform: 'none' }}>
                  {item}
                </Button>
              ))}
            </Box>
            <IconButton
              aria-label="Toggle Color Mode"
              onClick={colorMode.toggleColorMode}
              sx={{ marginLeft: '10px' }}
              edge="end"
              color="primary"
            >
              {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={isOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <DrawerContent handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Box>
    </>
  )
}

export default NavBar
