import React, { Component } from 'react';

export default class Gallery extends Component {
  render() {
    let galleryStuff = this.props.data

    return (
      <div className="Gallery">
        <h2>Gallery</h2>

        {galleryStuff.map(a =>
          <div key={a.id}>
            <img src={a.schoolPic} alt={a.schoolPic}/>
          </div>)}
      </div>
    );
  }
}
