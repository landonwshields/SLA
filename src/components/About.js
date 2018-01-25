import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <h2>About Us</h2>
        <p>{this.props.data[0].aboutInfo}</p>
        <p>{this.props.data[0].aboutMission}</p>
        <p>{this.props.data[0].aboutTeachers}</p>
      </div>
    );
  }
}
