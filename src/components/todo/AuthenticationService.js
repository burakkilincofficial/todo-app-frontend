import axios from "axios";
import {API_URL} from "./constants/Constants";

class AuthenticationService {
    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/v1/basicauth`, {
            headers: {authorization: this.createBasicAuthToken(username, password)}
        })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setUpAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    registerSuccessfulLogout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser")
        if (user === null) return ''
        return user
    }

    getUser() {
        let user = sessionStorage.getItem("authenticatedUser")
        if (user === null) return ''
        return user
    }

    setUpAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()