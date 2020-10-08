import { MDBBtn } from "mdbreact";
import React, { Component } from "react";
//import {Img} from 'react-image'
import DataService from "../../service/DataService";
class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      picture: "",
    };
    this.onImageChange = this.onImageChange.bind(this);
    this.setPicture = this.setPicture.bind(this);
    this.client = new DataService();
  }
  setPicture = () => {
    this.client.setPicture(this.props.messageId).then((response) => {
      console.log(response.data);
    });
  };
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };
  render() {
    return (
      <div>
        <div>
          <div>
           <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              size={150}
              alt={this.props.userName}
            />
            <input
              type="file"
              name="myImage"
              onChange={this.onImageChange}
              src={this.setPicture}
            />
            <MDBBtn>upload</MDBBtn>
          </div>
        </div>
      </div>
    );
  }
}
export default UploadPhoto;