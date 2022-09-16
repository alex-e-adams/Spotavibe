import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

/**
 * If you want to change any color of the application, do it here.
 * It will make future UI changes more painless and pretty quick.
 */
export const theme = createTheme({
  typography: {
    fontFamily: 'Arial Rounded MT Bold',
  },
  palette: {
    primary: {
      main: '#9760ff',
    },
    secondary: {
      main: '#e91e63',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#141414',
      paper: '#1c1c1c',
    },
    text: {
      primary: '#fff',
    },
  },
});

theme.components = {
  MuiTypography: {
    defaultProps: {
      style: {
        color: theme.palette.text.primary
      }
    }
  },
  MuiMenuItem: {
    defaultProps: {
      style: {
        color: theme.palette.text.primary,
        fontSize: '0.8rem'
      }
    }
  },
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './App';
// import ProfileContainer from './containers/ProfileContainer';
// import SearchContainer from './containers/SearchContainer';
// import Home from './containers/Home';
// // eslint-disable-next-line no-unused-vars
// import styles from './scss/styles.scss';

// const root = createRoot(document.getElementById('root'));

// root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />}>
  //       <Route path="home" element={<Home />} />
  //       <Route path="songsearch" element={<SearchContainer />} />
  //       <Route path="profile" element={<ProfileContainer />} />
  //       <Route
  //         path="*"
  //         element={(
  //           <div className="notFound">
  //             <p>Theres nothing here!</p>
  //           </div>
  //         )}
  //       />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>,
// );
