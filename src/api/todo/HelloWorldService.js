import axios from "axios";
import {API_URL} from "../../components/todo/constants/Constants";

class HelloWorldService {

    getHelloWorldMessage() {
        return axios.get(`${API_URL}/hello-world`)
    }

    getHelloWorldBeanMessage() {
        return axios.get(`${API_URL}/hello-world-bean`)
    }

    getPathVariableMessage(name) {
        return axios.get(`${API_URL}/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService();