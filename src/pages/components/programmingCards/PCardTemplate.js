import React from 'react';
import './PCardTemplate.css'

const PCardTemplate = ({cardType, language, libraries, title, date, place, company, details}) => {
    return (<div>
        <div className={cardType}>
            <div className="additional">
                <div className="item-card">
                    <div className="language center">
                        {language}
                        </div>
                    <div className="libraries center">
                        {libraries}
                        </div>
                </div>
                <div className="more-info">
                    <h1>{title}</h1>
                    <div className="coords">
                        <span></span>
                        <span>{date}</span>
                    </div>
                    <div className="coords">
                        <span>{company}</span>
                        <span>{place}</span>
                    </div>
                </div>
            </div>
            <div className="general">
                <h1>{title}</h1>
                <p>{details}</p>
                <span className="more">Mouse over the card for more info</span>
            </div>
        </div>
    </div>);
}

export default PCardTemplate;