import React from "react";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./ProfileUpdateForm.css";

import DataService from "../../service/DataService";
import { MDBBtn,MDBIcon } from "mdbreact";
import logo from "../../assets/images/logo3.jpg";


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
  <img src={logo} id="title" alt="logo"></img>
  
      <ul>
          <li ><Link to="/Profile"><i class="fa fa-home"></i>Profile</Link></li>
          <li><Link to="/messagefeed"><i class="fa fa-user"></i>Users</Link></li>
         
          <li><Link to="/messagefeed"><MDBIcon class="fa fa-comment" far icon="comment" > </MDBIcon>MessageFeed</Link></li>
          
          
         
         
      </ul>
    
  </div>
  <div class="main_content">
      <div class="header">
      <Menu isAuthenticated={this.props.isAuthenticated} />
      
      </div>
      
      <div className="profilespace">
      
     

<div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Update Profile</h3>
                        
                        
                    </div>
                    <div class="col-md-9 register-right">
                        
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                               
                                <div class="row register-form">
                               
                                    <div class="col-md-6">
                                    <form id="Registration-form" onSubmit={this.handleUpdate}>
                                        <div class="form-group">
                                        <label htmlFor="displayName">Display Name</label>
                                            <input type="text" class="form-control" 
                                            placeholder="Display Name"   name="displayName"
                                            autoFocus
                                            required
                                            onChange={this.handleChange}/>
                                        </div>
                                       
                                        <div class="form-group">
                                        <label htmlFor="password">Password</label>
                                            <input type="password" class="form-control" placeholder="Password"
                                             name="password"
                                             required
                                             onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                        <label htmlFor="about">About you</label><br></br>
                                            <input type="text" class="aboutyou"  placeholder="About You"
                                            name="about"
                                            autoFocus
                                            required
                                            onChange={this.handleChange}/>
                                        </div> 
                                       
                                        <input type="submit" class="btnRegister"  value="Register" disabled={loading}/>
                                        </form>
                                    </div>
                                   
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>

            </div>
        
     
      </div>
      
      
  </div>
</div>
   
     
    );
  }
}

export default userIsAuthenticated(ProfileUpdateForm);