import React from 'react';
// Import MUI components
import {
  Box,
} from '@mui/material';
// Import local components
import SearchContainer from './SearchContainer';

export default function Explore() {
  return(
    <Box 
      id="explore"
      sx={{
        height: '95%',
        display: 'flex',
      }}
    >
      <SearchContainer />
      <Box
        id="desk"
        sx={{
          margin: 1,
          padding: 1,
          width: 0.75,
          bgcolor: 'background.paper',
        }}
      >
      </Box>
    </Box>
  );
}