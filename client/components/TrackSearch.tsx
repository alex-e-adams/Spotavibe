import React, {useState} from 'react';
// Import MUI components
import {
  Box,
  Button,
  TextField
} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function TrackSearch() {
  const [query, setQuery] = useState<String>('');

  const handleQueryChange = (e: any) => setQuery(e.target.value);
  // Here will be the API call to the server.
  const handleSearch = () => console.log(query);

  return(
    <Box
      id="track-search-form"
      sx={{
        display: 'flex',
      }}
    >
      <TextField
        id="song-search-field"
        color="secondary"
        fullWidth
        variant="standard"
        value={query}
        onChange={handleQueryChange}
      />
      <Button
        variant="text"
        size="small"
        color="secondary"
        sx={{
          ml: 1
        }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  )
}