import axios from "axios"

const BASE_URL = "https://socialapp-api.herokuapp.com"

class BackendService {
    constructor (baseURL = BASE_URL, client ) {
        this.baseURL = baseURL
        this.client = client || axios.create({baseURL})
    }
    getMessages(limit = 25, offset){
       this.client.get( `/message?limit=${limit}&offset=${offset}`)
    }
    getSpecificMessage(messageId) {
        return this.client.get(this.url + "/messages/" + messageId);
      }
    
      createMessage(text) {
        let loginData = JSON.parse(localStorage.getItem("login"));
        return this.client.post(this.url + "/messages", text, {
          headers: { Authorization: `Bearer ${loginData.result.token}` },
        });
      }
}

export default new BackendService()