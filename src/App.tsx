import  AppBar from '@mui/material/AppBar'
import  Toolbar from '@mui/material/Toolbar'
import  Typography from '@mui/material/Typography'
import  Button from '@mui/material/Button'
import  IconButton from '@mui/material/IconButton'
import  MenuIcon from '@mui/icons-material/Menu'
import  Box from '@mui/material/Box'

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Menu Icon on the left */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Box>

        {/* Login Button */}
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
