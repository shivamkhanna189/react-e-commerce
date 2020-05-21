import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import { ShopsPage } from './pages/shops/shops.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header/>
      <Route exact path="/" component={ HomePage }/>
      <Route path="/shops" component = {ShopsPage}/>
    </div>
  );
}

export default App;
