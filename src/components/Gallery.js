import React, { Component } from 'react';

export default class Gallery extends Component {
  render() {
    // console.log(this.props.data[0].schoolPic);
    return (
      <div className="Gallery">
        <h2>Gallery</h2>
        <img src={this.props.data[0].schoolPic} alt='Pic 1' />
        <img src={this.props.data[1].schoolPic} alt='Pic 2' />
        <img src={this.props.data[2].schoolPic} alt='Pic 3' />
        <img src={this.props.data[3].schoolPic} alt='Pic 4' />
        <img src={this.props.data[4].schoolPic} alt='Pic 5' />
        <img src={this.props.data[5].schoolPic} alt='Pic 6' />
      </div>
    );
  }
}
