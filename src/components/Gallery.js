import React, { Component } from 'react';
import '../Styling/Gallery.css';


export default class Gallery extends Component {
  render() {
    let galleryStuff = this.props.data

    return (
      <div>
        <h2>Gallery</h2>

        {galleryStuff.map(a =>
          <div  className="Gallery" key={a.id}>
            <img className="galleryImage" src={a.schoolPic} alt={a.schoolPic}/>
          </div>)}
      </div>
    );
  }
}
