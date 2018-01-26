import React, { Component } from 'react';

export default class Specials extends Component {
  render() {
    let specialStuff = this.props.data
    return (
      <div className="Specials">
        <h2>Special Offers</h2>

        {specialStuff.map(a =>
          <div key={a.id}>
            <h3>{a.specialTitle}</h3>
            <p>{a.specialExplanation}</p>
            <p>{a.specialExample}</p>
          </div>)}
      </div>
    );
  }
}
