import {Component} from "react";
import '../todo/Todo.css'
import LoginComponent from "./LoginComponent";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "./HeaderComponent";
import ListTodosComponent from "./ListTodosComponent";
import LogoutComponent from "./LogoutComponent";
import WelcomeComponent from "./WelcomeComponent";
import FooterComponent from "./FooterComponent";
import ErrorComponent from "./ErrorComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UpdateTodoComponent from "./UpdateTodoComponent";
import CreateTodoComponent from "./CreateTodoComponent";

class TodoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'bodesere',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                            <AuthenticatedRoute exact path="/todo" component={CreateTodoComponent}/>
                            <AuthenticatedRoute path="/todo/:id" component={UpdateTodoComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>);
    }
}

export default TodoApp