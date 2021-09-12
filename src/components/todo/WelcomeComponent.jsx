import {Link} from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

const {Component} = require("react");

class WelcomeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            welcomeMessage: '',
            welcomeBeanMessage: '',
            welcomePathVariableMessage: ''
        }
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}!
                    You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    You can access the hello world message from button
                    <button className="btn btn-success" onClick={this.getWelcomeMessage}>Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                <div className="container">
                    {this.state.welcomeBeanMessage}
                </div>
                <div className="container">
                    {this.state.welcomePathVariableMessage}
                </div>
            </>
        );
    }

    getWelcomeMessage = () => {
        HelloWorldService.getHelloWorldMessage()
            .then(response => this.handleWelcomeMessage(response))
        HelloWorldService.getHelloWorldBeanMessage()
            .then(response => this.handleWelcomeBeanMessage(response))
        HelloWorldService.getPathVariableMessage(this.props.match.params.name)
            .then(response => this.handlePathVariableMessage(response))
    }

    handleWelcomeMessage = (response) => {
        this.setState({
            welcomeMessage: response.data
        })
    }

    handleWelcomeBeanMessage = (response) => {
        this.setState({
            welcomeBeanMessage: response.data.message
        })
    }

    handlePathVariableMessage = (response) => {
        this.setState({
            welcomePathVariableMessage: response.data.message
        })
    }
}

export default WelcomeComponent