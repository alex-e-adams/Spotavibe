import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import SpotifyAvatar from '../components/SpotifyAvatar'
import Login from '../components/Login';
import NavTabs from '../components/NavTabs';
// Import MUI components
import {
  Box,
  Tab,
  Tabs,
  Toolbar,
  AppBar,
  Typography,
} from '@mui/material';

export default function NavBar({ loggedIn, setLoginStatus }: InferProps<typeof NavBar.propTypes>) {
  return (
    <Box 
      id="navbar"
      sx={{
        height: '5%',
        px: 2,
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'primary.main',
      }}
    >
        <Typography
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
          }}>
          Spotavibe
        </Typography>
        { loggedIn ? 
          <>
            <Tabs>
              <Tab label="dashboard" />
              <Tab label="explore" />
            </Tabs>
            <SpotifyAvatar setLoginStatus={setLoginStatus}/>
          </> 
          : <Login />
        }
    </Box>
  );
}

// TODO: Should loggedIn be required?
NavBar.propTypes = {
  loggedIn: PropTypes.bool,
  setLoginStatus: PropTypes.func.isRequired,
};
