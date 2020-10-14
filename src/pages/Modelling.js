import React from 'react';
import Navbar from './components/navbar/Navbar';
import ModellingCenter from './components/centerFiles/3DModellingCenter';

const Modelling = () => {
    return (<div>
        <Navbar/>
        <article className="vh-100 dt w-100">
            <div className="dtc v-mid tc ph3 ph4-l">
                <ModellingCenter/>
            </div>
        </article>
    </div>);
}

export default Modelling;