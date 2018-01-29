import React, { Component } from 'react';
import '../Styling/Contact.css';


export default class Contact extends Component {
  render() {
    let contactStuff = this.props.data
    return (
      <div>
        <h2>Contact Us</h2>

        {contactStuff.map(a =>
          <div  className="Contact" key={a.id}>
            <h3>
              {a.schoolName}
            </h3>
            <h4>
              Address:
              <br></br>
              {a.schoolAddress}
            </h4>
            <h4>
              Email:
              <br></br>
              {a.schoolEmail}
            </h4>
            <h4>
              Call Us:
              <br></br>
              {a.schoolPhone}
            </h4>
          </div>)}
      </div>
    );
  }
}
