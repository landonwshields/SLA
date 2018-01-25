import React, { Component } from 'react';

export default class Programs extends Component {
  render() {
    return (
      <div className="Programs">
        <h2>Programs</h2>
        <h3>"A person is a person, no matter how small"</h3>
        <h5>-Dr. Seuss</h5>
        <br></br>
        <h3>{this.props.data[0].programName}</h3>
        <p>
          {this.props.data[0].programInfo}
        </p>
        <p>
          {this.props.data[0].programOptions}
        </p>
        <br></br>

        <h3>{this.props.data[1].programName}</h3>
        <p>
          {this.props.data[1].programInfo}
        </p>
        <p>
          {this.props.data[1].programOptions}
        </p>
      </div>
    );
  }
}
