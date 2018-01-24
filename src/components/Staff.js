import React, { Component } from 'react';

export default class Staff extends Component {
  render() {
    console.log(this.props.data);

    return (
      <div className="Staff">
        <h2>Staff</h2>
        <p>Superior Learning Academy employs experienced, highly trained, and certified teachers who deeply care about the development of your child.</p>
        <div>
          <img src={this.props.data[0].staffPic} alt='Wendy Pic' />
          <h3>{this.props.data[0].staffName}</h3>
          <p>{this.props.data[0].staffBio}</p>
        </div>
        <div>
          <img src={this.props.data[1].staffPic} alt='Shannon Pic' />
          <h3>{this.props.data[1].staffName}</h3>
          <p>{this.props.data[1].staffBio}</p>
        </div>
      </div>
    );
  }
}
