
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { Navbar, SideBar } from '../components';


const drawerWidth = 260;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} className=" animate__animated animate__fadeInDown">


        <Navbar drawerWidth={ drawerWidth } />

        <SideBar drawerWidth={ drawerWidth } />

        {/* Sidbar drawerWidth */}

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3}}
        >
            <Toolbar/>

            {children}

        </Box>

    </Box>
  )
}
