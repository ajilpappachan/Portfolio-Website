import React from 'react';
import './MCardTemplate.css';

const MCard = ({source, name}) => {
    return(<div className="mcard grow">
        <img src={source} alt={name} />
    </div>)
}

export default MCard;