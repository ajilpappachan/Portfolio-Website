import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import profile from '../../../resources/Profile Square.jpg'

const Navbar = () => {
    return (<div>
        <nav className="db dt-l w-100 border-box pa3 ph5-l bg-black o-90">
            <Link to='/' className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l">
                <img src={profile}
                    className="dib w2 h2 br-100 pointer"
                    alt="Profile" />
            </Link>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                <Link to='/programming'><p className="link dim white f6 f5-l dib mr3 mr4-l pointer">Programming</p></Link>
                <Link to='/gamedev'><p className="link dim white f6 f5-l dib mr3 mr4-l pointer">Game Development</p></Link>
                <Link to='/modelling'><p className="link dim white f6 f5-l dib mr3 mr4-l pointer">3D Modelling</p></Link>
                <Link to='/filmmaking'><p className="link dim white f6 f5-l dib mr3 mr4-l pointer">Film Making</p></Link>
            </div>
        </nav>
    </div>);
}

export default Navbar;