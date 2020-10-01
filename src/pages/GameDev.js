import React from 'react';
import Navbar from './components/navbar/Navbar';

const GameDev = () => {
    return (<div>
        <Navbar/>
        <article className="vh-100 dt w-100">
            <div className="dtc v-mid tc ph3 ph4-l">
                <h1 className="f7 f5-m f4-l fw6 tc">Game Development</h1>
            </div>
        </article>
    </div>);
}

export default GameDev;