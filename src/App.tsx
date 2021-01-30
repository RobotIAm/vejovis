import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import { Nav } from './components';
import AuthProvider from './AuthProvider';
import { Registration } from './views';

const App = () => (
  <AuthProvider>
    <Nav/>
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
  </AuthProvider>
);

export default App;
