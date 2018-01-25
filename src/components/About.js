import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let aboutStuff = this.props.data
    // console.log(aboutStuff);

    return (
      <div className="About">
        <h2>About Us</h2>
        {aboutStuff.map(a =>
          <div key={a.id}>
            <p>{a.aboutInfo}</p>
            <p>{a.aboutMission}</p>
            <p>{a.aboutTeachers}</p>
          </div>)}
      </div>
    );
  }
}
