import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  componentDidMount() {
    let userData = JSON.parse(localStorage.getItem("login"));
    if (userData.result !== null) {
      this.setState({
        username: userData.result.username,
      });
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    let profileLink = "/profile/" + this.state.username;
    return (
      <div className="Menu">
        <h1> Power 5th</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            
            <button class="btn aqua-gradient"><Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);