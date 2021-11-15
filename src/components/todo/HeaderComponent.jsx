import {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isLoggedIn();
        let user = AuthenticationService.getUser();
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{padding:7}}>
                    <div><a className="navbar-brand" href="https://burak-kilinc-blog.vercel.app/"
                    >{user}</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/bodesere">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
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
