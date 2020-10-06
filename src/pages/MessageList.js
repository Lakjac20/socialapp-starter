import React from "react";
import Menu from "../components/menu/Menu";
//import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../redux/HOCs";
import api from "../service/BackendService";
import Message from "../components/message/Message";
import "./Profile.css";
//import { MDBBtn,MDBIcon } from "mdbreact";
//import logo from "../assets/images/logo3.jpg";
class MessageList extends React.Component {
  state = { messages: [] };

  componentDidMount() {
    api
      .getMessages()
      .then((response) => this.setState({ messages: response.data.messages }));
  }

  render() {
    if (this.state.messages.length === 0) {
      
      return (
        <div className="MessageList">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h1>MessageList</h1>
          <h3>Loading...</h3>
        </div>
      );
    }

    return (
      <div className="MessageList">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h1>Message Feed</h1>
        <ul>
          {this.state.messages.map((messageObject) => (
            <Message key={messageObject.id} {...messageObject} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MessageList;