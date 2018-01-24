import React, { Component } from 'react';

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
      console.log(json);
     console.log(this.state.formsData[0]);
    }

  render() {
    return (
      <div className="Forms">
        <h2>Forms</h2>
        <h3>
          {this.state.formsData.map(a => <a key={a.id} href={a.registrationForm}>Registration Form</a>)}
        </h3>
        <h3>
          {this.state.formsData.map(a => <a key={a.id} href={a.emergencyContactForm}>Emergency Contact Form</a>)}
        </h3>
        <h3>
          {this.state.formsData.map(a => <a key={a.id} href={a.emergencyMedicalConsent}>Emergency Medical Consent Form</a>)}
        </h3>
        <h3>
          {this.state.formsData.map(a => <a key={a.id} href={a.generalHealthForm}>General Health Form</a>)}
        </h3>
        <h3>
          {this.state.formsData.map(a => <a key={a.id} href={a.immunizationForm}>Immunization Form</a>)}
        </h3>
      </div>
    );
  }
}
