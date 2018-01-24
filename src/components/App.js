import React, { Component } from 'react';
import logo from '../SLA_logo.png';
import '../Styling/App.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Programs from './Programs';
import Staff from './Staff';
import News from './News';
import Specials from './Specials';
import Forms from './Forms';
import Contact from './Contact';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      homePage: true,
      aboutUs: false,
      programs: false,
      staff: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false,
      data: []
    }
  }

  goToHome = (e) => {
    console.log('success')
    this.setState({
      homePage: true,
      aboutUs: false,
      programs: false,
      staff: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToAbout = (e) => {
    console.log('success')
    this.setState({
      homePage: false,
      aboutUs: true,
      programs: false,
      staff: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToPrograms = (e) => {
    console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: true,
      staff: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToStaff = (e) => {
    console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: true,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToNews = (e) => {
    console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      newsEvents: true,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToSpecials = (e) => {
    console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      newsEvents: false,
      specialOffers: true,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToForms = (e) => {
    console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      newsEvents: false,
      specialOffers: false,
      forms: true,
      contact: false
    })
    e.preventDefault();
  }

  goToContact = (e) => {
    console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: true
    })
    e.preventDefault();
  }

//Gets all data from API and sets state to Result
  async componentDidMount() {
    const response = await fetch('https://sla-db.herokuapp.com/api/staff')
    const json = await response.json()
    this.setState({data: json})
    console.log("this is working");
  }

  render() {
    return (
      <div className="App">
        <Header
          goToHome={this.goToHome.bind(this)}
          goToAbout={this.goToAbout.bind(this)}
          goToPrograms={this.goToPrograms.bind(this)}
          goToStaff={this.goToStaff.bind(this)}
          goToNews={this.goToNews.bind(this)}
          goToSpecials={this.goToSpecials.bind(this)}
          goToForms={this.goToForms.bind(this)}
          goToContact={this.goToContact.bind(this)}
        />
        {
          this.state.homePage ? <Home /> : null
        }
        {
          this.state.aboutUs ? <About /> : null
        }
        {
          this.state.programs ? <Programs /> : null
        }
        {
          this.state.staff ? <Staff data={this.state.data} /> : null
        }
        {
          this.state.newsEvents ? <News /> : null
        }
        {
          this.state.specialOffers ? <Specials /> : null
        }
        {
          this.state.forms ? <Forms /> : null
        }
        {
          this.state.contact ? <Contact /> : null
        }
        <img src={logo} className="App-logo-btm" alt="logo" />
        <Footer />
      </div>
    );
  }
}
