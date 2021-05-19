import React from 'react';
import { 
  HashRouter,
  Route,
  Switch
 } from 'react-router-dom';
 import apiKey from '../config';

function App() {
  return (
    <div className="Container">
      <h1>Let's play ball</h1>
      <p>{apiKey}</p>
    </div>

    

  );
}

export default App;
