import React from 'react';
import BgParticles from './components/particles/BgParticles';
import Navbar from './components/navbar/Navbar';
import HomeCenter from './components/centerFiles/HomeCenter';
import PortfolioOverview from './components/homeCards/PortfolioOverview';
import HomeSocial from './components/homeCards/HomeSocial';

const Home = () => {
    return (<div>
        <BgParticles />
        <Navbar />
        <HomeCenter />
        <PortfolioOverview />
        <HomeSocial />
    </div>);
}

export default Home;