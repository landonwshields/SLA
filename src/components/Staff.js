import React, { Component } from 'react';
import '../Styling/Staff.css';


export default class Staff extends Component {
  render() {
    let staffStuff = this.props.data

    return (
      <div>
        <h2>Staff</h2>
        <p>Superior Learning Academy employs experienced, highly trained, and certified teachers who deeply care about the development of your child.</p>

        {staffStuff.map(a =>
          <div  className="Staff" key={a.id}>
            <img className="staffImage" src={a.staffPic} alt={a.staffPic}/>
            <h3>{a.staffName}</h3>
            <p>{a.staffBio}</p>
          </div>)}
      </div>
    );
  }
}
