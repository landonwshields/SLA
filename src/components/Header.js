import React, { Component } from 'react';

import Navbar from './Navbar';


export default class Header extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="Header">
        <header>
          <h1>Superior Learning Academy</h1>
          <h3>More Than Just A Preschool</h3>
          <Navbar />
        </header>
      </div>
    );
  }
}
