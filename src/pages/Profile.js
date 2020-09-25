import React from "react";


import { Link } from "react-router-dom";
import UserInfo from "../components/userInfo/UserInfo";



import { userIsAuthenticated } from "../redux/HOCs";
import "./Profile.css";


class Profile extends React.Component {
  
  
  

  render() {
    return (
      <div className="Profile">
        <div class="wrapper">
    <div class="sidebar">
       <img src="https://www.metal-archives.com/images/2/7/9/4/27946_logo.jpg"></img>
        <ul>
            <li><a href="#"><i class="fa fa-home"></i>Profile</a></li>
            <li><a href="#"><i class="fa fa-user"></i>Users</a></li>
            <li><a href="#"><i class="fa fa-line-chart"></i>Timeline</a></li>
            <li><a href="#"><i class="fa fa-comment-o"></i>Comments</a></li>
            
            
           
            <li><a href="#"><i class="fa fa-gears"></i>Logout</a></li>
        </ul>
        <div class="social_media"> <a href="#"><i class="fa fa-facebook-f"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-instagram"></i></a> </div>
    </div>
    <div class="main_content">
        <div class="header">The Power Of Fith welcomes you!</div>
        <div class="info">
        <UserInfo username={this.props.match.params.username}/>
        </div>
    </div>
</div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);