import React, { Component } from 'react';

export default class News extends Component {
  render() {
    return (
      <div className="News">
        <h2>News and Events</h2>
        <br></br>
        <div>
          <h3>{this.props.data[0].eventTitle}</h3>
          <h4>{this.props.data[0].eventDescription}</h4>
        </div>
        <br></br>
        <div>
          <h3>{this.props.data[1].eventTitle}</h3>
          <h4>{this.props.data[1].eventDescription}</h4>
        </div>
        <br></br>
        <div>
          <h3>{this.props.data[2].eventTitle}</h3>
          <h4>{this.props.data[2].eventDescription}</h4>
        </div>
        <br></br>
        <h5>Call now for availability for our summer program. 303-885-1358</h5>
      </div>
    );
  }
}
