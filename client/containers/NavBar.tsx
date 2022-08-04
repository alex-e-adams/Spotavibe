import React, { useState } from 'react';
import axios from 'axios';
// Import MUI components
import {
  Box,
  IconButton,
  Tooltip,
  Toolbar,
  AppBar,
  Typography,
} from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

export default function NavBar() {
  const login = async () => {
    try {
      const response = await axios.get('/api/login')
      console.log(response);
    } catch (error) {

    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Spotavibe
          </Typography>
          <Tooltip title="Login with Spotify">
            <IconButton 
              color="inherit"
              onClick={login}
            >
              <LoginRoundedIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
