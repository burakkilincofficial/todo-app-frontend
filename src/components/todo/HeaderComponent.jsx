import {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isLoggedIn();
        let user = AuthenticationService.getUser();
        let welcomeUrl = "/welcome/" + user;
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{padding: 13}}>
                    <div><a className="navbar-brand" href="https://burakilinc.com"
                    >{user}</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to={welcomeUrl}>Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/register">Register</Link></li>}
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout"
                                                     onClick={AuthenticationService.registerSuccessfulLogout}>Logout</Link>
                        </li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(HeaderComponent);
