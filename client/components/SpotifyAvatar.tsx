import React from 'react';
import axios from 'axios';
import PropTypes, { InferProps } from 'prop-types';
// Import MUI components
import {
  IconButton,
  Tooltip,
} from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export default function Logout({ setLoginStatus }: InferProps<typeof Logout.propTypes>) {
    // const logOut = async () => {
  //   fetch('/api/logout').then((res) => res.json()).then((res) => {
  //     setLoginStatus(res.authenticated);
  //     nav('/home');
  //   }).catch((err) => console.log(err));
  // }

  
  const handleLogout = async () => {
    try {
      const res = await axios.get('/api/logout');
      const { authenticated } = res.data;
      console.log(authenticated);
      setLoginStatus(authenticated);
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

Logout.propTypes = {
  setLoginStatus: PropTypes.func.isRequired,
};