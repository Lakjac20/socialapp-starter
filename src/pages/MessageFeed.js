import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../service/DataService";
import Message from "../components/message/Message";
import { MDBBtn } from "mdbreact";
class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: { text: "" },
      messages: [],
    };

    this.client = new DataService();
  }

  getMessages() {
    return this.client.getMessages(10).then((result) =>
      this.setState({
        messages: result.data.messages,
      })
    );
  }

  handleChange = (e) => {
    let newmessage = e.target.value;
    this.setState({ message: { text: newmessage } });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.client.createMessage(this.state.message).then((result) => {
      this.getMessages();
    });

    this.setState({
      message: { text: "" },
    });
    event.target.reset();
  };

  componentDidMount() {
    this.getMessages();
  }

  render() {
    return (
      <div className="MessageBlock">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        <h3>Messages From Everyone</h3>
        <div className="message-field">
          <div className="messages">
            {this.state.messages.map((messageObject) => (
              <Message key={messageObject.id} {...messageObject} />
            ))}
          </div>
          <div className="NewMessage">
            <form
              value={this.state.message.text}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            >
              <input name="text" type="text" />
              <MDBBtn type="submit" disabled={loading}>Penny For Your Thoughts</MDBBtn>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
