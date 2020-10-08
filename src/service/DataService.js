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
  updateUser(text) {
    const loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.patch(
      this.url + "/users" + loginData.result.username, text,
      {
        headers: { Authorization: `Bearer ${loginData.result.token}` },
      }
    );
  }
  getUser(username) {
    return this.client.get(this.url + "/users/" + username);
  } 

  getUserPicture(username) {
    return this.client.get(`${this.url}/users/${username}/picture`);
  }
  setPicture(username) {
    const loginData = JSON.parse(localStorage.getItem("login")).result;
    return this.client.put(this.url + "/users/" + username + "/picture", {
      headers: { Authorization: `Bearer ${loginData.token}` },
    });
  }
}
export default DataService;