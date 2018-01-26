import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    let contactStuff = this.props.data
    return (
      <div className="Contact">
        <h2>Contact Us</h2>

        {contactStuff.map(a =>
          <div key={a.id}>
            <h3>{a.schoolName}</h3>
            <h4>{a.schoolAddress}</h4>
            <h4>{a.schoolEmail}</h4>
            <h4>{a.schoolPhone}</h4>
          </div>)}
      </div>
    );
  }
}
