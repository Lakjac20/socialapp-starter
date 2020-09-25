import axios from "axios";
class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    
        this.endpoint = {
            users: "users/",
    
  }
  this.client = client;
  this.token = JSON.parse(localStorage.getItem("login"))
}
createNewUser(credentials) {
    return this.client.post(this.url + this.endpoint.users, credentials)
}



updateUser(username, data) {
    return this.client.patch(this.url + this.endpoint.users + username, data, {
        headers: {
            Authorization: "Bearer " + this.token.result.token
        }
    })
}

//PICTURE DATA SIZE IS RESTRICTED TO <= 200kb
setUserPicture(username, picture) {
    return this.client.put(this.url + this.endpoint.users + username + "/picture", picture, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: "Bearer " + this.token.result.token
        }
    })
}

getUserPicture(username){
    return this.client.get(this.url + this.endpoint.users + username + "/picture")
}

getUser(username) {
    return this.client.get(this.url + this.endpoint.users + username)
}

getUsersList(limit) {
    return this.client.get(this.url + this.endpoint.users)
}

  RegisterUser(userData) {
    return this.client.post(this.url + "/users", userData);
  }
  
  
  

  getUser(username) {
    return this.client.get(this.url + "/users/" + username);
  }
}
export default DataService;