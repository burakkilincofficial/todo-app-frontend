import axios from "axios";

class HelloWorldService {

    getHelloWorldMessage() {
        return axios.get("http://localhost:8080/hello-world")
    }

    getHelloWorldBeanMessage() {
        return axios.get("http://localhost:8080/hello-world-bean")
    }

    getPathVariableMessage(name) {
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService();