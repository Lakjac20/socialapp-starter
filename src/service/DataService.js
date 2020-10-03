import axios from "axios";

const BASE_URL = "https://socialapp-api.heroku.com";

class DataService{

    constructor(baseURL = BASE_URL, client){
        this.baseURL = baseURL
        this.client = client || axios.create({ baseURL })
    }

    getMessages(limit, offset){
        return this.client.get(`/message?limit=${limit}&offset=${offset}`)
    }
}
export default new DataService()