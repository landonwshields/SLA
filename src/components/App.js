import React, { Component } from 'react';
import logo from '../SLA_logo.png';
import '../Styling/App.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
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
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false,
      staffData: [],
      specialsData: [],
      galleryData: [],
      newsData: [],
      contactData: [],
      programsData: []
    }
  }

  goToHome = (e) => {
    // console.log('success')
    this.setState({
      homePage: true,
      aboutUs: false,
      programs: false,
      staff: false,
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToAbout = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: true,
      programs: false,
      staff: false,
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToPrograms = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: true,
      staff: false,
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToGallery = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      gallery: true,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToStaff = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: true,
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToNews = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      gallery: false,
      newsEvents: true,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToSpecials = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      gallery: false,
      newsEvents: false,
      specialOffers: true,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToForms = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: true,
      contact: false
    })
    e.preventDefault();
  }

  goToContact = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: true
    })
    e.preventDefault();
  }

//Gets all data from staff API and sets state to Result
  async componentDidMount() {
    const response = await fetch('https://sla-db.herokuapp.com/api/staff')
    const json = await response.json()
    this.setState({staffData: json})
    // console.log("staff api is working");
    // console.log(this.state.staffData);
  }
//Gets all data from Specials API and sets state to Result
  async componentWillMount() {
    const response = await fetch('https://sla-db.herokuapp.com/api/specials')
    const specialJSON = await response.json()
    this.setState({specialsData: specialJSON})
    // console.log("specials api is working");
    // console.log(this.state.specialsData);
//Gets all data from Gallery API and sets state to Result
    const res = await fetch('https://sla-db.herokuapp.com/api/gallery')
    const galleryJSON = await res.json()
    this.setState({galleryData: galleryJSON})
    // console.log("gallery api is working");
    // console.log(this.state.galleryData);
//Gets all data from News API and sets state to Result
    const newsRes = await fetch('https://sla-db.herokuapp.com/api/news')
    const newsJSON = await newsRes.json()
    this.setState({newsData: newsJSON})
    // console.log("news api is working");
    // console.log(this.state.newsData);
//Gets all data from Contact API and sets state to Result
    const contactRes = await fetch('https://sla-db.herokuapp.com/api/contact')
    const contactJSON = await contactRes.json()
    this.setState({contactData: contactJSON})
    // console.log("contact api is working");
    // console.log(this.state.contactData);
//Gets all data from Programs API and sets state to Result
    const programsRes = await fetch('https://sla-db.herokuapp.com/api/programs')
    const programsJSON = await programsRes.json()
    this.setState({programsData: programsJSON})
    console.log("programs api is working");
    console.log(this.state.programsData);
  }


  render() {
    return (
      <div className="App">
        <Header
          goToHome={this.goToHome.bind(this)}
          goToAbout={this.goToAbout.bind(this)}
          goToPrograms={this.goToPrograms.bind(this)}
          goToStaff={this.goToStaff.bind(this)}
          goToGallery={this.goToGallery.bind(this)}
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
          this.state.programs ? <Programs data={this.state.programsData} /> : null
        }
        {
          this.state.staff ? <Staff data={this.state.staffData} /> : null
        }
        {
          this.state.newsEvents ? <News data={this.state.newsData} /> : null
        }
        {
          this.state.gallery ? <Gallery data={this.state.galleryData} /> : null
        }
        {
          this.state.specialOffers ? <Specials data={this.state.specialsData} /> : null
        }
        {
          this.state.forms ? <Forms /> : null
        }
        {
          this.state.contact ? <Contact data={this.state.contactData} /> : null
        }
        <img src={logo} className="App-logo-btm" alt="logo" />
        <Footer />
      </div>
    );
  }
}
