import axios from "axios";

class TodoService {

    getAllTodosByName(name){
        return axios.get(`http://localhost:8080/v1/todo/user-name/${name}`)
    }
}

export default new TodoService();