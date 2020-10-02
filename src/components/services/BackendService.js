import axios from "axios";

const BASE_URL = "https://socialapp-api.herokuapp.com";

class BackendService {
  constructor(baseURL = BASE_URL, client) {
    this.baseURL = baseURL
    this.client = client || axios.create({baseURL: BASE_URL})
  } 

  getMessages(limit = 25) {
    this.client.get(`/messages?limit=${limit}&offset=${offset}&username=${username}`)
  }
}

export default new BackendService();