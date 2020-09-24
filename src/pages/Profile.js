import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import Message from "../components/message/Message";
class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <h4>Messages</h4>
        <Message/>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);