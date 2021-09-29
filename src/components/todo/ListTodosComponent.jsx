import TodoService from "../../api/todo/TodoService";
import AuthenticationService from "./AuthenticationService";

const {Component} = require("react");

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        let userName = AuthenticationService.getUser()
        console.log(userName)
        TodoService.getAllTodosByName(userName)
            .then(response=> this.setState({
                todos: response.data.data
            }))


    }

    // getAllTodos = () => {
    //     TodoService.getAllTodos()
    //         .then(response => this.handleGetAllTodos(response))
    //         .catch(err=>console.log("buuggg", err))
    // }
    // handleGetAllTodos = (response) => {
    //     this.setState({
    //         todos : response.data.data
    //     })
    // }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is Completed</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.todos.map(todo =>
                            <tr key={todo.id}>
                                <td>{todo.todoName}</td>
                                <td>{todo.description}</td>
                                <td>{todo.targetDate}</td>
                                <td>{todo.isCompleted.toString()}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent