import React, { Component } from "react";
import { userIsNotAuthenticated } from "../redux/HOCs";
//import { deleteAccount } from "./actions.js"
import { deleteUser } from "../actions";
import { MDBBtn } from "mdbreact";
class DeleteAccount extends Component {
  render() {
    return (
      <div className="delete-account-div">
        <MDBBtn color="red" onClick={this.props.deleteUser}>Delete Account</MDBBtn>
      </div>
    );
  }
}

export default userIsNotAuthenticated(
  null,
  {deleteUser}
)(DeleteAccount);
