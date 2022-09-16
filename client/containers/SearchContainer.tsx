import React, { useState } from 'react';
// Import MUI components
import {
  Box,
} from '@mui/material';
// Import local components
import TrackSearch from '../components/TrackSearch';
import TrackCard from '../components/TrackCard';

export default function SearchContainer() {
  const [results, setResults] = useState([]);
  return (
    <Box
      id="song-search"
      sx={{
        ml: 1,
        my: 1,
        padding: 1,
        width: 0.25,
        bgcolor: 'background.paper',
      }}
    >
      <TrackSearch />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
      <TrackCard />
    </Box>
  )
}