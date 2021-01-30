import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import { Nav } from './components';
import AppProvider from './AppProvider';

const App = () => (
  <AppProvider>
    <Nav/>
    <BrowserRouter>
      <Switch>
        <Route path="/second">
          <SecondPage />
        </Route>
        <Route path="/third">
          <ThirdPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  </AppProvider>
);

export default App;
