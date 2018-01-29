import React, { Component } from 'react';
import '../Styling/Gallery.css';


export default class Gallery extends Component {
  constructor(){
    super();
    this.state = {
      updateValue: '',
      postValue: '',
      active: false,
      adminPassword: 'BadAss1',
      passwordDisplay: false
    }

    this.handlePostChange = this.handlePostChange.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleUpdateChange = this.handleUpdateChange.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleAdminPassword = this.handleAdminPassword.bind(this);
    this.handleAdmin = this.handleAdmin.bind(this);
  }

  handleAdminPassword(event){
    if (event.target.value === this.state.adminPassword) {
      this.setState({active: true})
    }
  }

  handleAdmin(event){
    this.setState({passwordDisplay: true})
  }

  handlePostChange(event) {
    this.setState({postValue: event.target.value});
  }
  handlePostSubmit() {
    fetch('https://sla-db.herokuapp.com/api/gallery', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        schoolPic: this.state.postValue
      })
    })
    alert('Submitted: ' + this.state.postValue);
  }

  handleUpdateChange(event, id) {
    this.setState({
      updateValue: event.target.value
    });
  }
  handleUpdateSubmit(id) {
    var updateValue = this.state.updateValue
    fetch('https://sla-db.herokuapp.com/api/gallery/' + id, {
      method: 'PUT',
      mode: 'CORS',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        schoolPic: updateValue
      })
    })
    alert('Submitted: ' + this.state.updateValue);
  }


  render() {
    let galleryStuff = this.props.data

    return (
      <div>
        <h2>Gallery</h2>

        {galleryStuff.map(a =>
          <div  className="Gallery" key={a.id}>
            <img className="galleryImage" src={a.schoolPic} alt={a.schoolPic}/>
            {
              this.state.active ?
              <form onSubmit={() =>this.handleUpdateSubmit(a.id)} >
                <textarea rows='4' cols='100' placeholder="Add Image URL here" id={a.id} onChange={this.handleUpdateChange}/>
                <br></br>
                <input type="submit" value="Update" />
              </form> : null
            }
          </div>)}

          {
            this.state.active ?
            <form onSubmit={this.handlePostSubmit}>
              <label>
                <textarea rows='4' cols='100' onChange={this.handlePostChange} placeholder="Add New Image URL" />
              </label>
              <br></br>
              <input type="submit" value="Add New" />
            </form> : null
          }
          <br></br>
          <button onClick={this.handleAdmin}>Admin</button>
          {
            this.state.passwordDisplay ?
            <form>
              <textarea rows='1' cols='15' onChange={this.handleAdminPassword} />
              <br></br>
              {/* <input type="submit" value="Admin Password" /> */}
            </form> : null
          }
      </div>
    );
  }
}
