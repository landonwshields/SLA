import React, { Component } from 'react';

import About from './About';
import Home from './Home';
import Programs from './Programs';
import Staff from './Staff';
import News from './News';
import Specials from './Specials';
import Contact from './Contact';
import Forms from './Forms';


export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Home />
        <About />
        <Programs />
        <Staff />
        <News />
        <Specials />
        <Contact />
        <Forms />
      </div>
    );
  }
}
