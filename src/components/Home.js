import React, { Component } from 'react';

export default class Home extends Component {

  render() {
    let homeStuff = this.props.data
    let homeInfo = function(){
      for (var i = 0; i < homeStuff.length; i++) {
        return homeStuff[i].homeIntro
      }
    }
    return (
      <div className="Home">
        <h2>Home</h2>
        {homeStuff.length > 0 ? <h4>{homeInfo()}</h4> : null }
      </div>
    );
  }
}
