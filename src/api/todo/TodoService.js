import axios from "axios";

class TodoService {

    getAllTodosByName = (name) => {
        return axios.get(`http://localhost:8080/v1/todos/user-name/${name}`)
    }

    getTodo = (id) => {
        return axios.get(`http://localhost:8080/v1/todos/${id}`)
    }

    deleteTodo(id) {
        return axios.delete(`http://localhost:8080/v1/todos/${id}`)
    }

    createTodo = (name, createTodoRequest) => {
        return axios.post(`http://localhost:8080/v1/todos/${name}`, createTodoRequest)
    }

    async updateTodo(id, updateTodoRequest) {
        return await axios.put(`http://localhost:8080/v1/todos/${id}`, updateTodoRequest)
    }

    completeTodo = (id) => {
        return axios.post(`http://localhost:8080/v1/todos/complete/${id}`)
    }

}

export default new TodoService();