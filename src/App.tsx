import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import { Nav } from './components';
import AuthProvider from './AuthProvider';
import { Registration } from './views';
import { Box } from '@material-ui/core';

const App = () => (
  <AuthProvider>
    <Nav/>
    <Box component="div" style={{ height: '92vh' }}>
      <BrowserRouter>
        <Switch>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Box>
  </AuthProvider>
);

export default App;
