import React from 'react';
import { Switch, Route } from 'react-router-dom'

// pages
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';

// components
import Header from './components/Header/Header';

// styling
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
