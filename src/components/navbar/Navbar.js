import React from 'react';
import 'tachyons';

const Navbar = () => {
    return (<div>
        <nav className="db dt-l w-100 border-box pa3 ph5-l bg-black o-90">
            <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" title="Home">
                <img src="https://uiadzw.dm.files.1drv.com/y4mqJ1OkSIuGpvoL9fQz_z4HFE7tb702nPGhEdJBJB3JrsPnB0tOcY7lWx67EmbZrRyTjp7jw3A6rnKL-IzPYwvfZz-fgJjzrCN35XVeaSmyP7I8enBtpypR5Be--1-VcS1AqoOrkOM3q2o_MsEtgQHgQrOSyVlKykqi1BVh4NmV5-_aKoEgnLXGZIb20JFrTrpaDpBO3jedoibxGApS7buyw"
                    className="dib w2 h2 br-100"
                    alt="Site Name" />
            </a>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                <a className="link dim white f6 f5-l dib mr3 mr4-l">Programming</a>
                <a className="link dim white f6 f5-l dib mr3 mr4-l">Game Development</a>
                <a className="link dim white f6 f5-l dib mr3 mr4-l">3D Modelling</a>
                <a className="link dim white f6 f5-l dib mr3 mr4-l">Film Making</a>
            </div>
        </nav>
    </div>);
}

export default Navbar;