import React from 'react';
import './App.css';
import 'tachyons';

import Navbar from './components/navbar/Navbar';
import BgParticles from './components/particles/BgParticles';

import HomeCenter from './components/centerFiles/HomeCenter';
import PortfolioOverview from './components/homeCards/PortfolioOverview';
import HomeSocial from './components/homeCards/HomeSocial';

function App() {
  return (
    <div>
      <BgParticles/>
      <Navbar/>
      <HomeCenter/>
      <PortfolioOverview/>
      <HomeSocial/>
    </div>
  );
}

export default App;
