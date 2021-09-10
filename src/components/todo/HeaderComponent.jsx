import {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isLoggedIn();
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand" href="https://burak-kilinc-blog.vercel.app/"
                    >bodesere</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/bk">Home</Link></li>}
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
