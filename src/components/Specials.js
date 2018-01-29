import React, { Component } from 'react';
import '../Styling/Specials.css';


export default class Specials extends Component {
  render() {
    let specialStuff = this.props.data
    return (
      <div>
        <h2>Special Offers</h2>

        {specialStuff.map(a =>
          <div  className="Specials" key={a.id}>
            <h3>{a.specialTitle}</h3>
            <p>{a.specialExplanation}</p>
            <p>{a.specialExample}</p>
          </div>)}
      </div>
    );
  }
}
