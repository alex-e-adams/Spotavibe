import React, { useEffect, useState } from 'react';
// import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import LandingGraphic from './components/LandingGraphic';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './containers/NavBar';

export default function App() {
  const [loggedIn, setLoginStatus] = useState(false);
  const [token, setToken] = useState(undefined);
  
  const getAuthStatus = async () => fetch('/api/checkAuth')
    .then((res) => res.json())
    .then((res) => {
      if (res.authenticated === true) {
        return res;
      }
      return false;
    })
    .catch(() => false);

  useEffect(() => {
    if (!loggedIn) {
      getAuthStatus().then((res) => {
        setLoginStatus(res.authenticated);
        setToken(res.accessToken);
      });
    }
  });

  const element = (
    <Box className="App">
      <NavBar />
      <LandingGraphic />
    </Box>
  );

  return element;
}

  // const [loggedIn, setLoginStatus] = useState(false);
  // const [token, setToken] = useState(undefined);
  // const [playerID, setPlayerID] = useState(undefined);

  // // const nav = useNavigate();
  // const getAuthStatus = async () => fetch('/api/checkAuth')
  //   .then((res) => res.json())
  //   .then((res) => {
  //     if (res.authenticated === true) {
  //       return res;
  //     }
  //     return false;
  //   })
  //   .catch(() => false);

  // const logOut = async () => {
  //   fetch('/api/logout').then((res) => res.json()).then((res) => {
  //     setLoginStatus(res.authenticated);
  //     nav('/home');
  //   }).catch((err) => console.log(err));
  // }


  // const loggedInLinks = (
  //   <>
  //     <Link to="/profile">Profile</Link>
  //     <Link to="/songsearch">Search</Link>
  //     <a href="#" onClick={logOut}>Sign Out</a>
  //   </>
  // );

        {/* <div className="navBarContainer">
        <div className="navBar">
          <img
            src="img/spotavibe-logo.png"
            alt="Song Seeking Devil Chicken"
            style={{
              // borderRadius: '5%',
              // border: 'solid',
              borderColor: '#0e8a3d',
              borderWidth: '1px',
              height: '4em',
              width: '4em',
              marginRight: 'auto',
            }}
          />
          <Link to="/home">Home</Link>
          { (loggedIn) ? loggedInLinks : <a href="/api/login">Sign In</a> }
        </div>
      </div>
      <Outlet context={[playerID, token]} />
      <Player accessToken={token} setPlayerID={setPlayerID} /> */}