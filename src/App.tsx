import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
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
        <Route path="/third">
          <ThirdPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
