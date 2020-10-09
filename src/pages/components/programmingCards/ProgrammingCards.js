import React from 'react';
import PCardTemplate from './PCardTemplate';

const ProgrammingCards = () => {
    return (
        <div className="flex flex-wrap">
            <PCardTemplate
                cardType="card"
                language="HTML, JavaScript, CSS"
                libraries="React.js"
                title="CatFriends"
                date="September 2020"
                company="AN Games"
                place="Ernakulam, Kerala"
                details="A simple Web App created using React.js"
            />
            <PCardTemplate
                cardType="card"
                language="HTML, JavaScript, CSS"
                libraries="React.js"
                title="CatFriends"
                date="September 2020"
                company="AN Games"
                place="Ernakulam, Kerala"
                details="A simple Web App created using React.js"
            />
            <PCardTemplate
                cardType="card"
                language="HTML, JavaScript, CSS"
                libraries="React.js"
                title="CatFriends"
                date="September 2020"
                company="AN Games"
                place="Ernakulam, Kerala"
                details="A simple Web App created using React.js"
            />
            <PCardTemplate
                cardType="card green"
                language="C++"
                libraries="OpenGL"
                title="OpenGL Castle"
                date="December 2019"
                company="ICAT Design and Media College"
                place="Bangalore"
                details="Castle is a 3D environment created with C++ and OpenGL graphics as output for Graphics Programming module of L5 Game Programming at ICAT Design and Media College, Bangalore."
            />
        </div>);
}

export default ProgrammingCards;