import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderProps } from './HeaderProps';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export const Header: React.FC<HeaderProps> = ({isMenuOpen, onDrawerClick}) => {
  return (
    <Box data-testid="header" component="header">
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}} data-testid="navigation" component="nav">
        <Toolbar data-testid="toolbar">
          <IconButton onClick={onDrawerClick}
            sx={{color: 'inherit', zIndex: 1000}} aria-label="open navigation" data-testid="drawer-icon">
            {isMenuOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <Typography sx={{
            width: '100%',
            position: 'absolute',
            left: 0,
            textAlign: 'center'
            }} aria-label="New App" variant="h6" component="h1">
            New App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}