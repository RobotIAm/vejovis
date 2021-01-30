import React from 'react';
import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';

const Nav = () => (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            Vejovis
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
);

export default Nav;