import React from 'react';
import './App.css';
import { Weather } from './components/climate/Weather';
import {Transport} from './components/transport/Transport';

function App() {


  return (
      <div className="App">
        <Transport />
        <Weather />
    </div>
  );
}

export default App;
