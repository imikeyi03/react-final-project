import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import apiKey from '../config';


//  App Components
import Search from './Search';
import Nav from './Nav';

const App = () => (
    <div className="container">
      <Search />
      <Nav />
    </div>
  

);

export default App;
