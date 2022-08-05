import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import SpotifyAvatar from '../components/SpotifyAvatar'
import Login from '../components/Login';
// Import MUI components
import {
  Toolbar,
  AppBar,
  Typography,
} from '@mui/material';

export default function NavBar({ loggedIn, setLoginStatus }: InferProps<typeof NavBar.propTypes>) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Spotavibe
        </Typography>
        { loggedIn ? 
          <>
            <SpotifyAvatar setLoginStatus={setLoginStatus}/>
          </> 
          : <Login />
        }
      </Toolbar>
    </AppBar>
  );
}

// TODO: Should loggedIn be required?
NavBar.propTypes = {
  loggedIn: PropTypes.bool,
  setLoginStatus: PropTypes.func.isRequired,
};
