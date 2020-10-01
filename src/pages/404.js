import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (<div>
        <section className="vh-100 bg-near-white">
  <header className="tc ph5 lh-copy">
      <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight near-black">404</h1>
      <h2 className="tc f1-l fw1">Sorry, I can't find the page you are looking for.</h2>
  </header>
  <p className="fw1 i tc mt4 mt5-l f4 f3-l">Are you looking for one of these?</p>
  <ul className="list tc pl0 w-100 mt5">
    <Link to='/'><li className="dib"><p className="f5 f4-ns link black db pv2 ph3 hover-orange">Home</p></li></Link>
    <Link to='/programming'><li className="dib"><p className="f5 f4-ns link black db pv2 ph3 hover-orange">Programming</p></li></Link>
    <Link to='/gamedev'><li className="dib"><p className="f5 f4-ns link black db pv2 ph3 hover-orange">Game Development</p></li></Link>
    <Link to='/modelling'><li className="dib"><p className="f5 f4-ns link black db pv2 ph3 hover-orange">3D Modelling</p></li></Link>
    <Link to='/filmmaking'><li className="dib"><p className="f5 f4-ns link black db pv2 ph3 hover-orange">Film Making</p></li></Link>
  </ul>
</section>
    </div>);
}

export default NotFound;