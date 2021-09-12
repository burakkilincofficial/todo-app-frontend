import axios from "axios";

class TodoService {

    getAllTodos(){
        return axios.get("http://localhost:8080/v1/todo/")
    }
}

export default new TodoService();