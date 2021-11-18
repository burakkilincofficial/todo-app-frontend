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
            <div>
                <h1 className="heading">Welcome!</h1>
                <div className="container">
                    Welcome <strong>{this.props.match.params.name}! </strong>
                    You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    You can access the hello world message
                </div>
                <button className="btn btn-success" onClick={this.getWelcomeMessage}>Get Welcome Message</button>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                <div className="container">
                    {this.state.welcomeBeanMessage}
                </div>
                <div className="container">
                    {this.state.welcomePathVariableMessage}
                </div>
            </div>
        );
    }

    getWelcomeMessage = () => {
        HelloWorldService.getHelloWorldMessage()
            .then(response => this.handleWelcomeMessage(response))
        HelloWorldService.getHelloWorldBeanMessage()
            .then(response => this.handleWelcomeBeanMessage(response))
        HelloWorldService.getPathVariableMessage(this.props.match.params.name)
            .then(response => this.handlePathVariableMessage(response))
            .catch(error => this.handleError(error))

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

    handleError = (error) => {
        let errorMessage = '';

        if (error.message)
            errorMessage += error.message

        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }

        this.setState({welcomeMessage: errorMessage})
    }
}

export default WelcomeComponent