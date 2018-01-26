import React, { Component } from 'react';

export default class Programs extends Component {
  render() {
    let programStuff = this.props.data
    return (
      <div className="Programs">
        <h2>Programs</h2>
        <h3>"A person is a person, no matter how small"</h3>
        <h5>-Dr. Seuss</h5>
        <br></br>
        {programStuff.map(a =>
          <div key={a.id}>
            <h4>{a.programName}</h4>
            <p>{a.programInfo}</p>
            <p>{a.programOptions}</p>
          </div>)}
      </div>
    );
  }
}
