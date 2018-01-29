import React, { Component } from 'react';
import logo from '../SLA_logo.png';
import '../Styling/Header.css';
import Navbar from './Navbar';


export default class Header extends Component {


  render() {
    return (
      <div className="Header">
        <header>
          <div className="HeaderDisplay">
            <div className="Title">
              <h1>Superior Learning Academy</h1>
              <h3>More Than Just A Preschool</h3>
            </div>
            <img src={logo} className="App-logo-top" alt="logo" />
          </div>

          <Navbar
            goToHome={this.props.goToHome}
            goToAbout={this.props.goToAbout}
            goToPrograms={this.props.goToPrograms}
            goToStaff={this.props.goToStaff}
            goToGallery={this.props.goToGallery}
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
