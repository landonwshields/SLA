import React, { Component } from 'react';
import '../Styling/Forms.css';


export default class Forms extends Component {
  constructor(){
    super();
    this.state = {
      formsData: [],
    }
  }

  //Gets all data from forms API and sets state to Result
    async componentDidMount() {
      const response = await fetch('https://sla-db.herokuapp.com/api/forms')
      const json = await response.json()
      this.setState({formsData: json})
      // console.log(json);
     // console.log(this.state.formsData[0]);
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
            </a>)
          }
        </div>
      </div>
    );
  }
}
