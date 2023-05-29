//Footer: debe verse siempre

import React from 'react'
import Box from '@mui/material/Box'

export const Footer = () => {
  return (<Box
    sx={{
      backgroundColor: '#2443f0',
      width: '100%',
      color: 'white',
      bottom: 0,
      position: 'fixed',
      display:'flex',
      justifyContent:'center'
    }}
  >
    <span>🎥 Ada Movies</span>
  </Box>
);
};

export default Footer;