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
        this.getData();

    }

    getData() {
        let userName = AuthenticationService.getUser()
        TodoService.getAllTodosByName(userName)
            .then(response => this.setState({
                todos: response.data.data
            }))
    }

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
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.todos.map(todo =>
                            <tr key={todo.id}>
                                <td>{todo.todoName}</td>
                                <td>{todo.description}</td>
                                <td>{todo.targetDate}</td>
                                <td>{todo.isCompleted.toString()}</td>
                                <td>
                                    <button className="btn btn-warning"
                                            onClick={() => this.updateTodoClicked(todo.id)}>Update
                                    </button>
                                </td>

                                <td>
                                    <button className="btn btn-outline-secondary"
                                            onClick={() => this.completeTodo(todo.id)}>Complete
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-danger"
                                            onClick={() => this.deleteTodoClicked(todo.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <button className="btn btn-success" onClick={() => this.addTodo()}>Add Todo</button>
            </div>
        );
    }

    updateTodoClicked = (id) => {
        this.props.history.push(`/todo/${id}`)
    }


    deleteTodoClicked = (id) => {
        TodoService.deleteTodo(id).then(r => {
            this.getData()
        })
    }

    addTodo = () => {
        this.props.history.push(`/todo`)
    }

    completeTodo = (id) => {
        TodoService.completeTodo(id).then(r => {
            this.getData()
        })
    }
}

export default ListTodosComponent