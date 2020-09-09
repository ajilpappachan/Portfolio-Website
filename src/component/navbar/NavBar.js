import React from 'react';
import profile from './profile.jpg';

const NavBar = () => {
    return (
        <div>
            <nav className="dt bg-black-90 fixed w-100 border-box pa3 ph5-ns">
                <div className="dtc v-mid mid-gray link dim w-25">
                    <img src={profile} className="dib w2 h2 br-100" alt="Site Name" />
                </div>
                <div className="dtc v-mid w-75 tr">
                    <p className="link white dim f6 f5-ns dib mr3 mr4-ns pointer" >Programming</p>
                    <p className="link white dim f6 f5-ns dib mr3 mr4-ns pointer">Game Development</p>
                    <p className="link white dim f6 f5-ns dib mr3 mr4-ns pointer">3D Modelling</p>
                    <p className="link white dim f6 f5-ns dib mr3 mr4-ns pointer">Film Making</p>
                </div> 
            </nav>
        </div>
    );
}

export default NavBar;