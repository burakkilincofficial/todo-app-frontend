import {Link} from "react-router-dom";

const {Component} = require("react");

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div>
                    Welcome {this.props.match.params.name}! You can manage your todos <Link to="/todos">here</Link>
                </div>
            </>
        );
    }
}

export default WelcomeComponent