import React from 'react';
import PCard from './PCard';

const ProgrammingCards = () => {
    return (
        <div className="flex flex-wrap">
            <PCard
                cardType="card"
                language="HTML, JavaScript, CSS"
                libraries="React.js"
                title="Portfolio Website"
                date="September 2020"
                company="AN Games"
                place="Ernakulam, Kerala"
                details="Ajil Pappachan's personal portfolio website"
                fullDetails="Ajil Pappachan's personal portfolio website created using HTML, CSS and javaScript using React.js"
                link="https://ajilpappachan.web.app"
                git="https://github.com/ajilpappachan/Portfolio-Website"
            />
            <PCard
                cardType="card green"
                language="HTML, JavaScript, CSS"
                libraries="React.js"
                title="Face Recognition Brain"
                date="September 2020"
                company="AN Games"
                place="Ernakulam, Kerala"
                details="React Website Implementing Face Recognition API"
                fullDetails="React Website created by Ajil Pappachan to demonstrate the usage of APIs and the functioning of the front end in cooperation with the backend server"
                link="https://ajilfacerecognitionbrain.web.app/"
                git="https://github.com/ajilpappachan/Face-Recognition-Brain"
            />
            <PCard
                cardType="card"
                language="HTML, JavaScript, CSS"
                libraries="React.js"
                title="CatFriends"
                date="September 2020"
                company="AN Games"
                place="Ernakulam, Kerala"
                details="A simple Web App created using React.js"
                fullDetails="React Web App created by Ajil Pappachan as part of learning React.js"
                link="https://ajucatfriends.web.app/"
                git="https://github.com/ajilpappachan/CatFriends"
            />
            <PCard
                cardType="card green"
                language="C++"
                libraries="OpenGL"
                title="OpenGL Castle"
                date="December 2019"
                company="ICAT Design and Media College"
                place="Bangalore"
                details="3D environment using OpenGL and C++"
                fullDetails="Castle is a 3D environment created with C++ and OpenGL graphics as output for Graphics Programming module of L5 Game Programming at ICAT Design and Media College, Bangalore."
                video="https://www.youtube.com/embed/j_2yD3cow60"
                git="https://github.com/ajilpappachan/OpenGL-Castle"
            />
        </div>);
}

export default ProgrammingCards;