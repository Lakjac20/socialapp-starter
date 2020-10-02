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
  createMessage(text) {
    return this.client.post(this.url + "/messages", text, {
      headers: { Authorization: `Bearer ${loginData.result.token}` },
    });
  }
}
export default DataService;
