import React, { Component } from 'react';

export default class Home extends Component {

  render() {
    let homeStuff = this.props.data
    return (
      <div className="Home">
        <h2>Home</h2>
        {homeStuff.length > 0 ? <h4>{this.props.data[0].homeIntro}</h4> : null }
      </div>
    );
  }
}
