import AuthenticationService from "./AuthenticationService.js";

const {Component} = require("react");

class LoginComponent extends Component {
    constructor() {
        super();

        this.state = {
            username: 'bodesere',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }

    loginClicked = () => {
        if (this.state.username === 'bodesere' && this.state.password === '123') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            this.setState({showSuccessMessage: false, hasLoginFailed: true})
        }

    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    User Name: <input type="text" name="username" value={this.state.username}
                                      onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password}
                                     onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>);
    }
}

export default LoginComponent
