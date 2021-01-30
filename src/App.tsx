import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import { Nav } from './components';
import { AuthProvider } from './providers';
import { Dashboard, Registration } from './views';
import { Box } from '@material-ui/core';
import SnackbarProvider from './providers/SnackbarProvider';

const App = () => (
  <SnackbarProvider>
    <AuthProvider>
      <BrowserRouter>
        <Nav/>
        <Box component="div" style={{ height: '92vh' }}>
            <Switch>
              <Route path="/register">
                <Registration />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
        </Box>
      </BrowserRouter>
    </AuthProvider>
  </SnackbarProvider>
);

export default App;
