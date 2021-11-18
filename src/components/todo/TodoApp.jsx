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
import TodoComponent from "./TodoComponent";
import RegisterComponent from "./RegisterComponent";
import FirstComponent from "./FirstComponent";

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
                <Router>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={FirstComponent}/>
                            <Route path="/register" component={RegisterComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute exact path="/todo" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todo/:id" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                </Router>
            );
    }
}

export default TodoApp