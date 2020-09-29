import React from "react";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./ProfileUpdateForm.css";
import DataService from "../../service/DataService";


import { MDBBtn, MDBIcon } from "mdbreact";

class ProfileUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      about: "",
      displayName: "",
    };
    this.client = new DataService();
  }
  handleUpdate = (e) => {
    e.preventDefault();
    this.client.updateUser(this.state);
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="Profile">
      <div class="wrapper">
  <div class="sidebar">
     <img src="https://www.metal-archives.com/images/2/7/9/4/27946_logo.jpg"></img>
      <ul>
          <li><Link to="/Profile"><i class="fa fa-home"></i>Profile</Link></li>
          <li><a href="#"><i class="fa fa-user"></i>Users</a></li>
         
          <li><Link to="/messagefeed"><MDBIcon class="fa fa-comment" far icon="comment" > </MDBIcon>Comments</Link></li>
          
          
         
         
      </ul>
     
  </div>
  <div class="main_content">
      <div class="header">The Power Of Fith welcomes you! 
      <Menu isAuthenticated={this.props.isAuthenticated} />
      
      </div>
      
     
      <div className="profileupdatepage">

<div>
  <h1>Update Profile:</h1>
  <form id="Registration-form" onSubmit={this.handleUpdate}>
    <label htmlFor="about">About you</label>
    <input
      className="aboutyou"
      type="text"
      name="about"
      autoFocus
      required
      onChange={this.handleChange}
    />
    <label htmlFor="password">Password</label>
    <input
      type="password"
      name="password"
      required
      onChange={this.handleChange}
    />
    <label htmlFor="displayName">Display Name</label>
    <input
      type="text"
      name="displayName"
      required
      onChange={this.handleChange}
    />
    <button type="submit" disabled={loading}>
      Register
    </button>
  </form>
</div>
</div>
     
  </div>
</div>
    </div>
      
     
    );
  }
}

export default userIsAuthenticated(ProfileUpdateForm);