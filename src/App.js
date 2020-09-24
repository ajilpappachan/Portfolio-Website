import React from 'react';
import './App.css';
import 'tachyons';

import Navbar from './components/navbar/Navbar';
import BgParticles from './components/particles/BgParticles';

import HomeCenter from './components/centerFiles/HomeCenter';

function App() {
  return (
    <div>
      <BgParticles/>
      <Navbar/>
      <HomeCenter/>
    </div>
  );
}

export default App;
