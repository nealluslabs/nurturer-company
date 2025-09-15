import React from 'react';
import { Box, Typography } from '@mui/material';

const InboxBanner = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: { xs: 0, lg: '80px' }, // 0 on mobile, 80px on desktop
        left: 0,
        right: 0,
        width: '100vw',
        height: '148px',
        backgroundColor: '#0d9ba1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
    </Box>
  );
};

export default InboxBanner;
