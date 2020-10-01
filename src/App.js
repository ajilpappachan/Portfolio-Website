import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NotFound from './pages/404';
import Home from './pages/Home';
import Programming from './pages/Programming';
import GameDev from './pages/GameDev';
import Modelling from './pages/Modelling';
import FilmMaking from './pages/FilmMaking';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/programming' component={Programming}/>
            <Route exact path='/gamedev' component={GameDev}/>
            <Route exact path='/modelling' component={Modelling}/>
            <Route exact path='/filmmaking' component={FilmMaking}/>

            <Route path='/404' component={NotFound}/>
            <Redirect to='/404'/>
          </Switch>
        </Router>
    );
  }
}

export default App;
