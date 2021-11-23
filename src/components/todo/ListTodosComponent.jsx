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

    getData = () => {
        let userName = AuthenticationService.getUser()
        TodoService.getAllTodosByName(userName)
            .then(response => this.setState({
                todos: response.data.data
            }))
    }

    render() {
        return (
            <div>
                <div className="test">
                    <h1 className="heading">List Todos</h1>
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <div className="container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed</th>
                                <th>Completed Date</th>
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
                                    <td>{todo.completedDate}</td>
                                    <td>
                                        <button className="btn btn-warning"
                                                onClick={() => this.updateTodoClicked(todo.id)}>Update
                                        </button>
                                    </td>

                                    <td>{!todo.isCompleted &&
                                    <button className="btn btn-outline-dark"
                                            onClick={() => this.completeTodo(todo.id, todo.todoName)}>Complete
                                    </button>}
                                    </td>
                                    <td>{todo.isCompleted &&
                                    <button className="btn btn-outline-secondary"
                                            onClick={() => this.incompleteTodo(todo.id, todo.todoName)}>Progressing
                                    </button>}
                                    </td>
                                    <td>
                                        <button className="btn btn-danger"
                                                onClick={() => this.deleteTodoClicked(todo.id, todo.todoName)}>Delete
                                        </button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    <button className="btn btn-success" onClick={() => this.addTodo()}>Add Todo</button>
                </div>

            </div>
        );
    }

    updateTodoClicked = (id) => {
        this.props.history.push(`/todo/${id}`)
    }


    deleteTodoClicked = (id, name) => {
        TodoService.deleteTodo(id).then(r => {
            this.setState({message: `Todo was deleted successfully, ${name}`})
            this.getData()
        })
    }

    addTodo = () => {
        this.props.history.push(`/todo`)
    }

    completeTodo = (id, name) => {
        TodoService.completeTodo(id).then(r => {
            this.setState({message: `Todo was completed successfully, ${name}`})
            this.getData()
        })
    }

    incompleteTodo(id, name) {
        TodoService.incompleteTodo(id).then(r => {
            this.setState({message: `Todo is still progressing, ${name}`})
            this.getData()
        })
    }
}

export default ListTodosComponent