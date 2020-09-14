import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import MessagesForm from "../components/messagesForm/MessagesForm";
class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <h4>Messages</h4>
        <MessagesForm/>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);