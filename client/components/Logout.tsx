import React from 'react';
import axios from 'axios';
// Import MUI components
import {
  IconButton,
  Tooltip,
} from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export default function Logout() {
    // const logOut = async () => {
  //   fetch('/api/logout').then((res) => res.json()).then((res) => {
  //     setLoginStatus(res.authenticated);
  //     nav('/home');
  //   }).catch((err) => console.log(err));
  // }

  
  const handleLogout = () => {
    try {
      
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <Tooltip title="Logout">
      <IconButton 
        color="inherit"
        onClick={handleLogout}
      >
        <LogoutRoundedIcon />
      </IconButton>
    </Tooltip>
  );
}