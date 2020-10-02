import React from "react";
import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../redux/HOCs";
import DataService from "../service/DataService";
import Message from "../components/message/Message";
import "./Profile.css";
import { MDBBtn,MDBIcon } from "mdbreact";
import logo from "../assets/images/logo3.jpg";

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: { text: "" },
      messages: [],
      // messageSent: false,
    };

    this.client = new DataService();
  }

  getMessages() {
    return this.client.getMessages(10).then((result) =>
      this.setState({
        messages: result.data.messages,

        // messageSent: false,
      })
    );
  }

  handleChange = (e) => {
    let newmessage = e.target.value;
    this.setState({ message: { text: newmessage } });
  };
  // reused from login form

  handleSubmit = (event) => {
    event.preventDefault();
    this.client.createMessage(this.state.message).then((result) => {
      this.getMessages();
    });

    this.setState({
      message: { text: "" },
      // messageSent: true,
    });
    event.target.reset();
  };

  componentDidMount() {
    this.getMessages();
  }

  render() {
    // if (this.state.messageSent === true) {
    //   this.getMessages();
    //   return (
    //     <div>
    //       <h1>Message Sent!</h1>
    //     </div>
    //   );
    // }
    return (
      <div className="Profile">
        <div class="wrapper">
    <div class="sidebar">
    <img src={logo} id="title" alt="logo"></img>
        <ul>
            <li ><Link to="/Profile"><i class="fa fa-home"></i>Profile</Link></li>
            <li><a href="#"><i class="fa fa-user"></i>Users</a></li>
           
            <li><Link to="/messagefeed"><MDBIcon class="fa fa-comment" far icon="comment" > </MDBIcon>MessageFeed</Link></li>
            
            
           
           
        </ul>
      
    </div>
    <div class="main_content">
        <div class="header"> 
        <Menu isAuthenticated={this.props.isAuthenticated} />
        
        </div>
        
        <div className="profilespace">
        <h1>Messages</h1>
        <div class="container py-5">
  
  

  
    <div class="col-lg-8 mx-auto">

      <div class="card mb-4">
        <div class="card-body p-5">
          
          <div class="custom-scrollbar-css p-2">
          <div className="MessageBlock">

<h3>Messages From Everyone</h3>
<div className="message-field">
  <div className="messages">
    {this.state.messages.map((messageObject) => (
      <Message key={messageObject.id} {...messageObject} />
    ))}
    {/* <MessageList
      handleLike={this.handleLike}
      messageArray={this.state.messages}
    /> */}
  </div>
  <div className="NewMessage">
    <form
      value={this.state.message.text}
      onChange={this.handleChange}
      onSubmit={this.handleSubmit}
    >
      <input name="text" type="text" />
      <button class="btn aqua-gradient">Penny For Your Thoughts</button>
    </form>
  </div>
  
</div>
</div>
          </div>
        </div>
      </div>

     

     

     
      

      
    </div>
  
</div>
          
       
        </div>
        
        
    </div>
</div>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);