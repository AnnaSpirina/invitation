import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Place from './components/Place';
import Invitation from './components/Invitation';
import Timing from './components/Timing';
import DressCode from './components/DressCode';
import CountdownWithQR from './components/CountdownWithQR';

function App() {
  return (
    <div className="App">
      <Hero />
      <Invitation />
      <Place />
      <Timing />
      <DressCode />
      <CountdownWithQR />
    </div>
  );
}

export default App;