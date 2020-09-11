import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import MessagesForm from "../components/messagesForm/MessagesForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>The Strength of the 5th Power</h2>
        <h3>Login Below</h3>
        <LoginForm />
        <h3>Register Below</h3>
        <RegistrationForm />
        <hr></hr>
        <h4>Messages</h4>
        <MessagesForm/>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);