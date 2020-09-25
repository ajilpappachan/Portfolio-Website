import React from 'react';
import './App.css';
import 'tachyons';

import Navbar from './components/navbar/Navbar';
import BgParticles from './components/particles/BgParticles';

import HomeCenter from './components/centerFiles/HomeCenter';
import PortfolioOverview from './components/homeCards/PortfolioOverview';

function App() {
  return (
    <div>
      <BgParticles/>
      <Navbar/>
      <HomeCenter/>
      <PortfolioOverview/>
    </div>
  );
}

export default App;
