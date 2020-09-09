import React, { Component } from 'react';
import './App.css';
import NavBar from './component/navbar/NavBar';

//Pages
import Home from './pages/home/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: ''
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
