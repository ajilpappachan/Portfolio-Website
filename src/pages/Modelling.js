import React from 'react';
import Navbar from './components/navbar/Navbar';
import './Modelling.css';
import ModellingCenter from './components/centerFiles/3DModellingCenter';
import ModellingCards from './components/modellingCards/ModellingCards';
import Footer from './components/footer/Footer';

const Modelling = () => {
    return (<div className="modellingCenter">
        <Navbar/>
        <article className="vh-100 dt w-100">
            <div className="dtc v-mid tc ph3 ph4-l">
                <ModellingCenter/>
            </div>
        </article>
        <ModellingCards/>
        <Footer/>
    </div>);
}

export default Modelling;