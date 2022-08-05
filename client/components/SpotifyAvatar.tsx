import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes, { InferProps } from 'prop-types';
import axios from 'axios';
// Import MUI components
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton
} from '@mui/material';

export default function SpotifyAvatar({ setLoginStatus }: InferProps<typeof SpotifyAvatar.propTypes>) {
  const [avatarURL, setAvatarURL] = useState<string>('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  let navigate = useNavigate();

  // Logic for avatar menu.
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Logic for handling logout on avatar menu.
  const handleLogout = async () => {
    try {
      const res = await axios.get('/api/logout');
      const { authenticated } = res.data;
      handleClose();
      navigate('/');
      setLoginStatus(authenticated);
    } catch (error) {
      console.log(error);
    }
  };

  // Logic for loading avatar.
  async function getData() {
    return fetch('/api/call/me').then((res) => res.json()).then((res) => {
      return res;
    })
  }
  useEffect(() => {
    getData().then((res) => {
      setAvatarURL(res.body.images[0].url);
    });
  })

  return ( 
    <>
      { 
      avatarURL === ''
      ? 
      <Avatar alt='...' src={'../assets/loading-avatar.svg'} /> 
      : 
      <>
        <IconButton 
          id="avatar-button"
          size="small"
          aria-controls={open ? 'avatar-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Avatar 
            alt='me'
            src={avatarURL}
          />
        </IconButton>
        <Menu
          id="avatar-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'avatar-menu-button',
          }}
        >
          <MenuItem 
            onClick={handleLogout}
          >
            Logout
          </MenuItem>
        </Menu>
      </>
      }
    </>
  );
};

SpotifyAvatar.propTypes = {
  setLoginStatus: PropTypes.func.isRequired,
};