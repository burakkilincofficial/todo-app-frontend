const {Component} = require("react");

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos:
                [
                    {id: 1, done: false, targetDate: new Date().toDateString(), description: 'Learn React'},
                    {id: 2, done: true, targetDate: new Date().toDateString(), description: 'Learn JS'},
                    {id: 3, done: false, targetDate: new Date().toDateString(), description: 'Learn XML'},
                    {id: 4, done: true, targetDate: new Date().toDateString(), description: 'Learn A'},
                    {id: 5, done: true, targetDate: new Date().toDateString(), description: 'Learn B'},
                    {id: 6, done: true, targetDate: new Date().toDateString(), description: 'Learn C'},
                    {id: 7, done: false, targetDate: new Date().toDateString(), description: 'Learn D'},
                    {id: 8, done: true, targetDate: new Date().toDateString(), description: 'Learn E'},
                    {id: 9, done: true, targetDate: new Date().toDateString(), description: 'Learn F'},
                    {id: 10, done: true, targetDate: new Date().toDateString(), description: 'Learn G'},
                    {id: 11, done: true, targetDate: new Date().toDateString(), description: 'Learn G'},
                    {id: 12, done: true, targetDate: new Date().toDateString(), description: 'Learn G'},
                    {id: 13, done: true, targetDate: new Date().toDateString(), description: 'Learn G'},
                    {id: 14, done: true, targetDate: new Date().toDateString(), description: 'Learn G'},
                    {id: 15, done: true, targetDate: new Date().toDateString(), description: 'Learn G'},
                    {id: 16, done: true, targetDate: new Date().toDateString(), description: 'Learn G'},
                    {id: 17, done: true, targetDate: new Date().toDateString(), description: 'Learn G'},
                    {id: 18, done: true, targetDate: new Date().toDateString(), description: 'Learn G'},
                    {id: 19, done: true, targetDate: new Date().toDateString(), description: 'Learn G'},
                    {id: 20, done: true, targetDate: new Date().toDateString(), description: 'Learn G'},
                    {id: 21, done: true, targetDate: new Date().toDateString(), description: 'Learn G'},
                    {id: 22, done: true, targetDate: new Date().toDateString(), description: 'Learn G'}
                ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is Completed</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.todos.map(todo =>
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.targetDate.toString()}</td>
                                <td>{todo.done.toString()}</td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                </div>
            </div>);
    }
}

export default ListTodosComponent