import React, { Component } from 'react';

export default class Home extends Component {
  constructor(){
    super();
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    fetch('https://sla-db.herokuapp.com/api/home', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        homeIntro: this.state.value
      })
    })
    alert('Submitted: ' + this.state.value);
  }

  render() {
    let homeStuff = this.props.data
    return (
      <div className="Home">
        <h2>Home</h2>
        {homeStuff.map(a =>
          <div key={a.id}>
            <p>{a.homeIntro}</p>
          </div>)}

          <form onSubmit={this.handleSubmit}>
            <label>
              <textarea rows='7' cols='100' value={this.state.value} onChange={this.handleChange} />
            </label>
            <br></br>
            <input type="submit" value="Submit" />
          </form>

      </div>
    );
  }
}
