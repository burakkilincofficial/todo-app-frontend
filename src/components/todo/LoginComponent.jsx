import AuthenticationService from "./AuthenticationService.js";

const {Component} = require("react");

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }

    loginClicked = () => {
        AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginWithJwt(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            })
            .catch(() => {
                this.setState({showSuccessMessage: false, hasLoginFailed: true})
                this.props.history.push("/login")
            })

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
            <>
                <h1 className="heading">Login to Todo Account</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    User Name: <input type="text" name="username" value={this.state.username}
                                      onChange={this.handleChange} placeholder="admin"/>
                    Password: <input type="password" name="password" value={this.state.password}
                                     onChange={this.handleChange} placeholder="****"/>
                    <span>{' '}</span>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </>);
    }
}

export default LoginComponent
