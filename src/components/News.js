import React, { Component } from 'react';

export default class News extends Component {
  render() {
    let newsStuff = this.props.data

    return (
      <div className="News">
        <h2>News and Events</h2>
        <br></br>

        {newsStuff.map(a =>
          <div key={a.id}>
            <h3>{a.eventTitle}</h3>
            <p>{a.eventDescription}</p>
          </div>)}

        <br></br>
        <h5>Call now for availability for our summer program. 303-885-1358</h5>
      </div>
    );
  }
}
