import React from "react";
import Spinner from "react-spinkit";
import Button from 'react-bootstrap/Button';
import "./RegistrationForm.css";
import DataService from "../../service/DataService";

import  { MDBInput, MDBBtn } from  "mdbreact";
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "username": "",
      "password": "",
      "displayName": ""
    };
    this.client = new DataService();
  }
  handleRegistration = e => {
    e.preventDefault();
    this.client.RegisterUser(this.state).then(result => {alert(result.data)})
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { loading, error } = this.props;
    return (
      <div className="RegistrationForm">
        <form id="registration-form" onSubmit={this.handleRegistration}>
        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Username"
                          icon="user"
                          name="username"
            autoFocus
            required
            onChange={this.handleChange}
            
          />
          <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Password"
                          icon="lock"
                          type="password"
                          name="password"
            required
            onChange={this.handleChange}
            
          />
          <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="displayName"
                          icon="Address-Book"
                          type="text"
                          name="displayName"
            required
            onChange={this.handleChange}
            
          />
           <MDBBtn type="submit" color="indigo" disabled={loading}>
           Sign Up
           </MDBBtn>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}
export default RegistrationForm;