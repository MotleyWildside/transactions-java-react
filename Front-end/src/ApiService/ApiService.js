import axios from "axios";

export default class ApiService {
    static url = "http://localhost:8080";

    static get(route) {
        return axios.get(`${this.url}${route}`);
    }

    static post(route, body) {
        return axios.post(`${this.url}${route}`, body);
    }

    static put(route) {
        return axios.post(`${this.url}${route}`);
    }

    static delete(route, index) {
        return axios.delete(`${this.url}${route}/${index}`);
    }
}
