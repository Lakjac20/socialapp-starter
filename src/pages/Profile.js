import React from "react";
import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import DataService from "../service/DataService";
import { userIsAuthenticated } from "../redux/HOCs";
import "./Profile.css";
import { MDBBtn,MDBIcon } from "mdbreact";
import logo from "../assets/images/logo3.jpg";



class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.username,
      user: {},
      userImg: "",
    };

    this.client = new DataService();
  }
  componentDidMount() {
    this.client.getUserPicture(this.state.username).then((result) =>
      this.setState({
        userImg: result.config.url,
      })
    );
    return this.client.getUser(this.state.username).then((result) =>
      this.setState({
        user: result.data.user,
      })
    );
  }
  
  
  

  render() {
    return (
      <div className="Profile">
        <div class="wrapper">
    <div class="sidebar">
    <img src={logo} id="title" alt="logo"></img>
        <ul>
            <li ><Link to="/Profile"><i class="fa fa-home"></i>Profile</Link></li>
            <li><a href="#"><i class="fa fa-user"></i>Users</a></li>
           
            <li><Link to="/messagefeed"><MDBIcon class="fa fa-comment" far icon="comment" > </MDBIcon>MessageFeed</Link></li>
            
            
           
           
        </ul>
      
    </div>
    <div class="main_content">
        <div class="header">The Power Of five welcomes you! 
        <Menu isAuthenticated={this.props.isAuthenticated} />
        
        </div>
        
        <div className="profilespace">
        <h1>Profile</h1>
          <div>
          <div class="container d-flex justify-content-center mt-5">
    <div class="profile-card">
        <div class="profile-image text-center mt-4"> <img src="https://i.imgur.com/RrKeDv8.jpg" class="img-fluid rounded-circle img-thumbnail" width="130"/> </div>
        <div class="profile text-center mt-2 text-white">
            <h3 class="mt-2"><h3>Profile Name: {this.state.user.displayName} </h3></h3> <span class="d-block">
            <p>Update Name:{this.state.user.about}</p></span> 
            <div class="mt-4">  <Link to="/ProfileUpdate"><MDBBtn>Update Profile</MDBBtn></Link> <Link to="/profilePictureUpdate"><MDBBtn>Upload Picture</MDBBtn></Link> </div>
            <div class="icons">
            <li><a href=""><i class="fa fa-facebook"></i></a></li>
                <li><a href=""><i class="fa fa-twitter"></i></a></li>
                <li><a href=""><i class="fa fa-instagram"></i></a></li>
            </div>
        </div>
    </div>
</div>
            <br />
            
          </div>
          
       
        </div>
        
        
    </div>
</div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);