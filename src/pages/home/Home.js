import React from 'react';
import './Home.css'
import Particles from 'react-particles-js';
import HomeCardsFull from './HomeCardsFull';


const Home = () => {
    return (
        <div>
            <Particles className='particles' id="tsparticles"
                params={{
                    background: {
                        color: {
                            value: "#08090A",
                        },
                    },
                    fpsLimit: 60,
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: false,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }} />

            <article className="vh-100 dt w-100">
                <div className="dtc v-mid tc white ph3 ph4-l text">
                    <h1 className="f3 f2-m fw6 tc">"Great things are done by a series of small things brought together"</h1>
                    <h2 className="f4 f2-m fw6 tc">-Vincent van Gogh</h2>
                </div>
            </article>

            <article className="center hidden ba mv4 pa3">
                <h1 className="f4 bg-near-black white mv0 pv2 ph3">Overview Presentation</h1>
                <div className="pa3 bt">
                    <p className="f5 f5-ns mv0 white">
                        Hello. Welcome to my portfolio website. Please delve into this presentation as an overview of who I am and what I am capable of.
                    </p>
                    <div className='container'>
                    <iframe
                        title='presentation'
                        src="https://onedrive.live.com/embed?resid=7AC901B0DB2F5DD0%2113718&amp;authkey=%21AE2HBBtHISyY508&amp;em=2&amp;wdAr=1.7777777777777777"
                        frameBorder="0"
                        className='responsive-iframe pa2'>
                            This is an embedded <a target="_blank" rel="noopener noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" rel="noopener noreferrer" href="https://office.com/webapps">Office</a>.
                    </iframe>
                    </div>
                    
                </div>
            </article>
            <div className=' w-100 flex'>
            <HomeCardsFull/>
            </div>
            
        </div>
        
    );
}

export default Home;