import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import { ShopsPage } from './pages/shops/shops.component';

function App() {
  return (
    <div>
      <Route exact path="/" component={ HomePage }/>
      <Route path="/shops" component = {ShopsPage}/>
    </div>
  );
}

export default App;
