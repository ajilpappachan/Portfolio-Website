import React from 'react';
import './ScrollPrompt.css';
import arrow from '../../../resources/down-arrow.png';

const ScrollPrompt = () => {
    return(<div className="tc scroll">
        <p>Scroll Down</p>
        <img 
        src={arrow}
        alt="Scroll Icon"
        width="50px"
        height="50px"
        />
    </div>);
}

export default ScrollPrompt;