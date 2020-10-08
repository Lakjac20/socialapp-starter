import axios from "axios";
class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  RegisterUser(userData) {
    return this.client.post(this.url + "/users", userData);
  }
  updateUser() {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.patch(
      this.url + "/users/" + loginData.result.username,
      {
        headers: { Authorization: `Bearer ${loginData.result.token}` },
      }
    );
  }
// likeMessage(messageId) {
//    let loginData = JSON.parse(localStorage.getItem("login"));
 //   return this.client.post(this.url + "/likes/", messageId, {
 //     headers: { Authorization: `Bearer ${loginData.result.token}` },
 //   });
 // }

//  unlikeMessage(likeId) {
//    let loginData = JSON.parse(localStorage.getItem("login"));
 //   return this.client.delete(this.url + "/likes/" + likeId, {
 //     headers: { Authorization: `Bearer ${loginData.result.token}` },
 //   });
 // }
 // deleteMessage(messageId) {
 //   let loginData = JSON.parse(localStorage.getItem("login"));
 //   return this.client.delete(this.url + "/messages/" + messageId, {
 //     headers: { Authorization: `Bearer ${loginData.result.token}` },
 //   });
 // }

  getUser(username) {
    return this.client.get(this.url + "/users/" + username);
  }
  getUserPicture(username) {
    return this.client.get(`${this.url}/users/${username}/picture`);
  }

 // changeProfilePic(picture) {
   // let loginData = JSON.parse(localStorage.getItem("login"));
    //console.log(picture);
    //return this.client.put(
      //`${this.url}/users/${loginData.result.username}/picture`,
      //picture,
      //{
        //headers: {
          //Authorization: `Bearer ${loginData.result.token}`,
        //},
      //}
    //);
  //}
  deleteUser(username) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.delete(this.url + "/users/" + username, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }
  setPicture(username) {
    const loginData = JSON.parse(localStorage.getItem("login")).result;
    return this.client.put(this.url + "/users/" + username + "/picture", {
      headers: { Authorization: `Bearer ${loginData.token}` },
    });
  }
}
export default DataService;