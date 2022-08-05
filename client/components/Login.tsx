import React from 'react';
// Import MUI components
import {
  Button,
  Tooltip,
} from '@mui/material';

export default function Login() {
  // TODO: Figure out a better way to store variables like this.
  const CLIENT_ID = '2a61feec25db40d98eeba8a48127b6d7';
  const SPOTIFY_AUTHORIZE_URI = 'https://accounts.spotify.com/authorize';
  const REDIRECT_URI = 'http://localhost:9000/api/authenticate';
  const SCOPE = 'streaming user-read-private user-read-email user-modify-playback-state user-read-playback-state user-read-currently-playing app-remote-control';

  function generateRandomString(length: number): string {
    let randomString = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i += 1) {
      randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randomString;
  }

  const state = generateRandomString(16);

  const uri = SPOTIFY_AUTHORIZE_URI
    .concat(
      '?response_type=code',
      '&client_id=' + encodeURIComponent(CLIENT_ID),
      '&scope=' + encodeURIComponent(SCOPE),
      '&redirect_uri=' + encodeURIComponent(REDIRECT_URI),
      '&state=' + encodeURIComponent(state)
    );
  
  const handleLogin = () => {
    // https://github.com/microsoft/TypeScript/issues/48949
    const win: Window = window;
    win.location = uri;
  };

  return (
    <Tooltip title="Login with Spotify">
      <Button 
        color="inherit"
        onClick={handleLogin}
      >
        Login
      </Button>
    </Tooltip>
  );
}