import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";
import { MDBInput, MDBBtn } from "mdbreact";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="LoginForm">
        <form id="login-form" onSubmit={this.handleLogin}>
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
          <MDBBtn type="submit" color="indigo" disabled={loading}>
            Sign In
          </MDBBtn>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);