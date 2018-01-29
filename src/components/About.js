import React, { Component } from 'react';
import '../Styling/About.css';


export default class About extends Component {
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
    fetch('https://sla-db.herokuapp.com/api/about', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        aboutInfo: this.state.postValue
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
    fetch('https://sla-db.herokuapp.com/api/about/' + id, {
      method: 'PUT',
      mode: 'CORS',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        aboutInfo: updateValue
      })
    })
    alert('Submitted: ' + this.state.updateValue);
  }


  render() {
    let aboutStuff = this.props.data
    return (
      <div>
        <h2>About</h2>
        {aboutStuff.map(a =>
          <div  className="About" key={a.id}>
            <p>{a.aboutInfo}</p>
            {
              this.state.active ?
              <form onSubmit={() =>this.handleUpdateSubmit(a.id)} >
                <textarea rows='7' cols='100' placeholder={a.aboutInfo} id={a.id} onChange={this.handleUpdateChange}/>
                <br></br>
                <input type="submit" value="Update" />
              </form> : null
            }
          </div>)}
        <br></br>
          {
            this.state.active ?
            <form onSubmit={this.handlePostSubmit}>
              <label>
                <textarea rows='7' cols='100' onChange={this.handlePostChange} />
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
              <input type="password" onChange={this.handleAdminPassword} />
              <br></br>
            </form> : null
          }
      </div>
    );
  }
}
