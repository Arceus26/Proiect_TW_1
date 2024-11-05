import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Button color="inherit" component={Link} to="/">MyThesis</Button>
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/choose">Choose theme</Button>
          <Button color="inherit" component={Link} to="/add">Add theme</Button>
          <Button color="inherit" component={Link} to="/login">Log in</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
