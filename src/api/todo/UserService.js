import axios from "axios";
import {API_URL} from "../../components/todo/constants/Constants";

class UserService {

    getAllTodosByName = (name) => {
        return axios.get(`${API_URL}/todos/user-name/${name}`)
    }


    createUser = (createTodoRequest) => {
        console.log(createTodoRequest)
        return axios.post(`${API_URL}/users`, createTodoRequest)
    }
}

export default new UserService();