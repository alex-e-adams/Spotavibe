import React, { useState } from 'react';
import Login from '../components/Login';
import Logout from '../components/Logout'
// Import MUI components
import {
  Toolbar,
  AppBar,
  Typography,
} from '@mui/material';

type NavBarProps = {
  loggedIn: boolean,
}

export default function NavBar({ loggedIn }: NavBarProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Spotavibe
        </Typography>
        {loggedIn ? <Logout /> : <Login />}
      </Toolbar>
    </AppBar>
  );
}
