import React, { Component } from 'react';
import logo from '../SLA_logo.png';
import '../Styling/Header.css';
import Navbar from './Navbar';


export default class Header extends Component {


  render() {
    // console.log(this.props);
    return (
      <div className="Header">
        <header>
            <h1>Superior Learning Academy</h1>
            <img src={logo} className="App-logo-top" alt="logo" />
          <h3>More Than Just A Preschool</h3>
          <Navbar
            goToHome={this.props.goToHome}
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
