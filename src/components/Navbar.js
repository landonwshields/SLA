import React, { Component } from 'react';

import '../Styling/Navbar.css';


export default class Navbar extends Component {

  render() {
    return (
      <div className="Navbar">
        <a href='Home' onClick={this.props.goToHome}>
          <h4>Home</h4>
        </a>
        <a href='About' onClick={this.props.goToAbout}>
          <h4>About</h4>
        </a>
        <a href='Programs' onClick={this.props.goToPrograms}>
          <h4>Programs</h4>
        </a>
        <a href='Staff' onClick={this.props.goToStaff}>
          <h4>Staff</h4>
        </a>
        <a href='Gallery' onClick={this.props.goToGallery}>
          <h4>Gallery</h4>
        </a>
        <a href='News' onClick={this.props.goToNews}>
          <h4>News</h4>
        </a>
        <a href='Specials' onClick={this.props.goToSpecials}>
          <h4>Specials</h4>
        </a>
        <a href='Forms' onClick={this.props.goToForms}>
          <h4>Forms</h4>
        </a>
        <a href='Contact' onClick={this.props.goToContact}>
          <h4>Contact</h4>
        </a>
      </div>
    );
  }
}
