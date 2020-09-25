import React from "react";
import { withRouter } from "react-router-dom";
import { withAsyncAction } from "../../redux/HOCs";
import "./UserInfo.css";

import DataService from "../../service/DataService";


import  { MDBInput, MDBBtn } from  "mdbreact";
class UserInfo extends React.Component {
    constructor(props) {
      super(props);
      this.client = new DataService();
      this.state = {
        updateUser: false,
        passwordDialog: false,
        formData: {
          picture: ""
        },
        userPicture: { config: "" },
        profileImage: "",
        userData: {
          password: "",
          about: "",
          displayName: ""
        }
      };
    }
    handleDelete = event => {
        this.client.deleteUser(this.props.username);
        this.props.logout();
      };
    
      getCurrentUserPicture() {
        this.client
          .getUserPicture(this.props.username)
          .then(response => this.setState({
            userPicture: response,
          })).then(() => this.setState({ profileImage: this.state.userPicture.config.url }))
      }
    
      handleSubmit = event => {
        event.preventDefault();
        this.togglePasswordDialog();
    
        if (this.state.picture) {
          const formData = this.fileUpload(this.state.picture);
          this.client.setUserPicture(this.props.username, formData).then(() => {
            this.getCurrentUserPicture()
          })
        }
    
        const userDataRequest = {
          password: this.state.userData.password,
          about: this.state.userData.about,
          displayName: this.state.userData.displayName
        };
        
        this.client.updateUser(this.props.username, userDataRequest);
    
        this.toggleUpdateUser()
      };
    
      onChange = e => {
        let userData = this.state.userData;
        userData[e.target.name] = e.target.value;
    
        let pictureSet = this.state.formData.picture;
        if (e.target.files !== undefined && e.target.files !== null) {
          pictureSet = e.target.files[0];
        }
    
        this.setState({
          picture: pictureSet || this.state.formData.picture,
          profileImage: pictureSet.name || this.state.profileImage,
          userData
        });
      };
    
      onChangePass = e => {
        let userData = this.state.userData;
        userData[e.target.name] = e.target.value;
    
        this.setState({
          userData
        });
      };
    
      fileUpload(file) {
        const formData = new FormData();
        formData.append("picture", file);
        return formData;
      }
    
      getUserData() {
        return this.client.getUser(this.props.username).then(result => {
          const capsDisplayName = result.data.user.displayName;
          this.setState({
            userData: {
              password: "",
              about: result.data.user.about,
              displayName: capsDisplayName,
            }
          });
        })
      }
    
      toggleUpdateUser = () => {
        this.setState({
          updateUser: !this.state.updateUser,
          profileImage: this.state.userPicture.config.url
        });
      };
    
      togglePasswordDialog = () => {
        this.setState({
          passwordDialog: !this.state.passwordDialog
        });
      };
    
      handleUpdate = () => {
        this.setState({
          updateUser: true
        });
      };
    
      componentDidMount() {
        this.getUserData();
        this.getCurrentUserPicture();
      }
      render() {
        const { classes } = this.props;
    
        return (
          <React.Fragment>
         
              
              
            
            
                
             
            
               
                <MDBBtn onClick={this.handleSubmit} color="textPrimary">
                  click to me
                </MDBBtn>
            
         
    
             
                <img src={this.state.profileImage} id="profileImg" alt="" />
                {this.state.updateUser && (
                  <form>
                    <input
                      name="picture"
                      type="file"
                      accept="image/png, image/jpeg, image/gif"
                    />
                  </form>
                )}
                <div onClick={this.handleUpdate}>
                 
                    {this.state.updateUser && (
                      <MDBInput
                        displayName="outlined-helperText"
                        name="displayName"
                        label="Display Name"
                        fullWidth
                        defaultValue={this.state.userData.displayName}
                        variant="filled"
                      />
                    )}
    
                    {!this.state.updateUser && this.state.userData.displayName}
                
                 
                    {this.state.updateUser && (
                      <MDBInput
                        id="filled-multiline-flexible"
                        label="Update About"
                        name="about"
                        fullWidth
                        defaultValue={this.state.userData.about}
                        multiline
                        rowsMax="4"
                        variant="filled"
                      />
                    )}
                    {!this.state.updateUser && this.state.userData.about}
                 
                </div>
    
                {this.state.updateUser && (
                  <React.Fragment>
                    <div display="flex" justifyContent="center">
                     
                        
    
                        <MDBBtn
                          size="large"
                          onClick={this.toggleUpdateUser}
                          variant="contained"
                        >
                          Submit
                        </MDBBtn>
                      
                    </div>
    
                   
                    
                        
                      
                   
                  </React.Fragment>
                )}
             
            
          </React.Fragment>
        );
      }
    }
    
export default withAsyncAction("auth", "logout")(UserInfo);