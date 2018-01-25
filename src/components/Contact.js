import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    console.log(this.props.data[0]);
    return (
      <div className="Contact">
        <h2>Contact Us</h2>
        <h3>{this.props.data[0].schoolName}</h3>
        <h4>{this.props.data[0].schoolAddress}</h4>
        <h4>{this.props.data[0].schoolEmail}</h4>
        <h4>{this.props.data[0].schoolPhone}</h4>
      </div>
    );
  }
}
