import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#212121' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
       
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Anillo Único
        </Typography>

        
        <Typography variant="subtitle1" component="div" sx={{ fontStyle: 'italic' }}>
          Uno para dominarlos a todos
        </Typography>

      </Toolbar>
    </AppBar>
  );
};

export default Header;