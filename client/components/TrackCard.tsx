import React from 'react';
// Import MUI components
import {
  Box,
  Button,
  Typography,
} from '@mui/material';

export default function TrackCard() {
  return(
    <Box
      id="temp"
      sx={{
        display: 'flex',
        mt: 1,
        padding: 1
      }}
    >
      <Button
        sx={{
          color: 'secondary.main',
        }}
        fullWidth
      >
        <img 
          style={{
            height: '60px',
            width: '60px'
          }}
          src="https://i.scdn.co/image/ab67616d0000b273c87f0133365b6e731ce4fb6f"
          alt="album cover"
        />
        <Box
          sx={{
            width: 1,
          }}
        >
          <Typography>
            Track: The Worst
          </Typography>
          <Typography>
            Artist: Polphia
          </Typography>
          <Typography>
            Album: The Most Hated
          </Typography>
        </Box>
      </Button>
    </Box>
  )
}