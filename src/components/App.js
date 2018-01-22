import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      title: "Welcome Landon"
    }
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title}/>
        <img src={logo} className="App-logo" alt="logo" />
        <Footer />
      </div>
    );
  }
}
