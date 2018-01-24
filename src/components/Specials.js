import React, { Component } from 'react';

export default class Specials extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="Specials">
        <h2>Special Offers</h2>
        <h3>{this.props.data[0].specialTitle}</h3>
        <p>
          {this.props.data[0].specialExplanation}
        </p>
        <p>
          {this.props.data[0].specialExample}
        </p>
        <br></br>
        <h3>{this.props.data[1].specialTitle}</h3>
        <p>
          {this.props.data[1].specialExplanation}
        </p>
        <p>
          {this.props.data[1].specialExample}
        </p>
      </div>
    );
  }
}
