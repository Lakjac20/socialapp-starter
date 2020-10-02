import React from "react";
import Spinner from "react-spinkit";
import "../../messages/message/Messages.css";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.client.postMessage(this.state.message).then((result) => {
      this.props.updateFeed();
      this.setState({
        message: {
          text: "",
        },
      });
    });
  };
  handleChange = (e) => {
    let newmessage = e.target.value;
    this.setState({
      message: {
        text: newmessage,
      },
    });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="Messages">
        <form id="messages-form" onSubmit={this.handleMesages}>
          <label htmlFor="messages">Messages</label>
          <input
            type="text"
            name="text"
            autoFocus
            required
            onChange={this.handleChange}
            value={this.state.message.text}
          />
          <button type="submit" disabled={loading}>
            Penny for Your Thoughts
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default Messages;