import axios from "axios";

const api = axios.create({
    baseURL:"https://lit-stream-68081.herokuapp.com"
})
export default api