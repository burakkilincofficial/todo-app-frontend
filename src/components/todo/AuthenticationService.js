import axios from "axios";
import {API_URL} from "./constants/Constants";

export const USER_NAME_SESSION_ATTR_NAME = 'authenticatedUser'

class AuthenticationService {
    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/v1/basicauth`, {
            headers: {authorization: this.createBasicAuthToken(username, password)}
        })
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    createJwtAuthToken(token) {
        return 'Bearer ' + token
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTR_NAME, username);
        this.setUpAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    registerSuccessfulLoginWithJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTR_NAME, username);
        this.setUpAxiosInterceptors(this.createJwtAuthToken(token))
    }

    registerSuccessfulLogout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTR_NAME);
    }

    isLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTR_NAME)
        if (user === null) return ''
        return user
    }

    getUser() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTR_NAME)
        if (user === null) return ''
        return user
    }

    setUpAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedIn()) {
                    config.headers.Authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()