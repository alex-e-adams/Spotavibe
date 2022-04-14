import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  const [loggedIn, setLoginStatus] = useState(false);

  const getAuthStatus = async () => {
    return fetch('/api/checkAuth').then((res) => res.json()).then((res) => {
      if (res.authenticated === true) {
        return true;
      } else {
        return false;
      }
    }).catch(() => false);
  }

  const logOut = async () => {
    fetch('/api/logout').then((res) => res.json()).then((res) => {
      setLoginStatus(res.authenticated);
    }).catch((err) => console.log(err));
  }

  useEffect(() => {
    if (!loggedIn) {
      getAuthStatus().then((res) => {
        setLoginStatus(res);
      });
    }
  });

  

  const loggedInLinks = (
    <>
      <Link to="/profile">Profile</Link>
      <Link to="/songsearch">Song Search</Link>
      <Link to="/playlists">Playlists</Link>
      <a href="#" onClick={logOut}>Sign Out</a>
    </>
  );

  const element = (
    <div className="mainPage">
      <div className="navBarContainer">
        <div className="navBar">
          <img
            src="img/DevilChickenWithHeadphones.jpg"
            alt="Song Seeking Devil Chicken"
            style={{
              borderRadius: '100%',
              border: 'solid',
              borderColor: '#0e8a3d',
              borderWidth: '3px',
              height: '4em',
              width: '4em',
              marginRight: 'auto',
            }}
          />
          { (loggedIn) ? loggedInLinks : <a href="/api/login">Sign In</a> }
        </div>
      </div>
      <Outlet context={setLoginStatus} />
    </div>
  );

  return element;
}
