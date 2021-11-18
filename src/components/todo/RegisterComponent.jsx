import {Component} from "react";
import {Link} from "react-router-dom";

class RegisterComponent extends Component {
    render() {
        return (
            <>
                <h1 className="heading">Register Todo Account</h1>
                <div className="container">
                    User Name: <input type="text" name="username"
                                      onChange={this.handleChange} placeholder="admin"/>
                    Password: <input type="password" name="password"
                                     placeholder="****"/>
                    <span>{' '}</span>
                    <button className="btn btn-success">Login</button>
                </div>
                <div>
                    <Link to="/login" className="link" style={{textDecoration: 'none'}}>
                        Do you have already account?
                    </Link></div>
            </>

        )
    }
}

export default RegisterComponent