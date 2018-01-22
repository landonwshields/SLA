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
          <Navbar
            goToAbout={this.props.goToAbout}
            goToPrograms={this.props.goToPrograms}
            goToStaff={this.props.goToStaff}
            goToNews={this.props.goToNews}
            goToSpecials={this.props.goToSpecials}
            goToForms={this.props.goToForms}
            goToContact={this.props.goToContact}
          />
        </header>
      </div>
    );
  }
}
