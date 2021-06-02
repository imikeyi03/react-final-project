import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import apiKey from '../config';


//  App Components
import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

const App = () => (
  <HashRouter>
    <div className="container">
      <Search />
      <Nav />
      
    </div>
  
  </HashRouter>  
);

export default App;
