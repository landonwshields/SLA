import React, { Component } from 'react';
import '../Styling/Forms.css';


export default class Forms extends Component {
  constructor(){
    super();
    this.state = {
      formsData: [],
      updateValue: '',
      postValue: '',
      titleChange: '',
      active: false,
      adminPassword: 'BadAss1',
      passwordDisplay: false
    }
    this.handlePostChange = this.handlePostChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleUpdateChange = this.handleUpdateChange.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleAdminPassword = this.handleAdminPassword.bind(this);
    this.handleAdmin = this.handleAdmin.bind(this);
  }

  //Gets all data from forms API and sets state to Result
    async componentDidMount() {
      const response = await fetch('https://sla-db.herokuapp.com/api/forms')
      const json = await response.json()
      this.setState({formsData: json})
      // console.log(json);
     // console.log(this.state.formsData[0]);
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
      this.setState(
        {postValue: event.target.value});
    }
    handleTitleChange(event) {
      this.setState(
        {titleChange: event.target.value});
    }
    handlePostSubmit() {
      fetch('https://sla-db.herokuapp.com/api/forms', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formName: this.state.titleChange,
          schoolForm: this.state.postValue
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
      fetch('https://sla-db.herokuapp.com/api/forms/' + id, {
        method: 'PUT',
        mode: 'CORS',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          schoolForm: updateValue
        })
      })
      alert('Submitted: ' + this.state.updateValue);
    }


  render() {
    return (
      <div>
        <h2>Forms</h2>
        <div>
          {this.state.formsData.map(a =>
            <a  className="Forms" key={a.id} href={a.schoolForm}>
              {a.formName}
              <br></br>
              {
                this.state.active ?
                <form onSubmit={() =>this.handleUpdateSubmit(a.id)} >
                  <textarea rows='2' cols='100' placeholder={a.schoolForm} id={a.id} onChange={this.handleUpdateChange}/>
                  <br></br>
                  <input type="submit" value="Update" />
                </form> : null
              }
            </a>)
          }
        </div>
        {
          this.state.active ?
          <form onSubmit={this.handlePostSubmit}>
            <label>
              <textarea placeholder="Form Title"
                rows='1' cols='30' onChange={this.handleTitleChange}
              />
              <textarea placeholder="New Form URL"
                rows='1' cols='100' onChange={this.handlePostChange}
              />
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
        <div className="Spacing" ></div>
      </div>
    );
  }
}
