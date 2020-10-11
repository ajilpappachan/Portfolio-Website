import React from 'react';
import './PCardFullTemplate.css';

const PCardFullTemplate = ({ video, photo, link, git, cardType, language, libraries, title, fullDetails, date, place, company, displayFullCard }) => {
    return (<div onClick={displayFullCard}>
        <div className={`${cardType} fullcard`}>
            <div className="full-additional">
                <div className="item-fullcard">
                    <div className="language center">
                        {language}
                    </div>
                    <div className="libraries center">
                        {libraries}
                    </div>
                    <div className="container">
                    {
                        video !== undefined && <iframe className="responsive-iframe" 
                        title="Video" 
                        src={video} 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>
                    }
                    {
                        photo !== undefined && <img width="100%" height="auto" src={photo} alt="DescriptionPhoto"/>
                    }
                    </div>
                </div>
            </div>
            <div className="general">
                <h1 className="title">{title}</h1>
                <p className="text tr">{date}</p>
                <p className="text tr">{company}</p>
                <p className="text tr">{place}</p>
                <p className="text">{fullDetails}</p>
                {
                    link !== undefined && <p className="text">Link: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
                }
                {
                    git !== undefined && <p className="text"><a href={git} target="_blank" rel="noopener noreferrer">Visit the GitHub Repository</a></p>
                }
                <span className="more">Click to collapse</span>
            </div>
        </div>
    </div>);
}

export default PCardFullTemplate;