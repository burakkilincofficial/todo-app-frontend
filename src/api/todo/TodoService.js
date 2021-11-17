import axios from "axios";
import {API_URL} from "../../components/todo/constants/Constants";

class TodoService {

    getAllTodosByName = (name) => {
        return axios.get(`${API_URL}/v1/todos/user-name/${name}`)
    }

    getTodo = (id) => {
        return axios.get(`${API_URL}/v1/todos/${id}`)
    }

    deleteTodo(id) {
        return axios.delete(`${API_URL}/v1/todos/${id}`)
    }

    createTodo = (name, createTodoRequest) => {
        return axios.post(`${API_URL}/v1/todos/${name}`, createTodoRequest)
    }

    updateTodo = (id, updateTodoRequest) => {
        return axios.put(`${API_URL}/v1/todos/${id}`, updateTodoRequest)
    }

    completeTodo = (id) => {
        return axios.post(`${API_URL}/v1/todos/complete/${id}`)
    }

    incompleteTodo = (id) => {
        return axios.post(`${API_URL}/v1/todos/incomplete/${id}`)
    }

}

export default new TodoService();