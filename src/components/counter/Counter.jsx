import {Component} from "react";
import PropTypes from "prop-types";
import './Counter.css'

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
            name: 'burak'
        }
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} mathMethod={this.mathMethod} operator={'+'}/>
                <CounterButton by={5} mathMethod={this.mathMethod}/>
                <CounterButton by={10} mathMethod={this.mathMethod}/>
                <span className="count">{this.state.counter}</span>
                <span className="count">{this.state.name}</span>
                <div>
                    <button className="reset" onClick={this.reset}>Reset</button>
                </div>
            </div>

        );
    }

    reset = () => {
        this.setState({counter: 0, name: 'burak'});
    }

    increment = (by) => {
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement = (by) => {
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }

    multiply = (by) => {
        this.setState(
            (prevState) => {
                return {counter: prevState.counter * by}
            }
        );
    }

    divide = (by) => {
        this.setState(
            (prevState) => {
                return {counter: prevState.counter / by}
            }
        );
    }

    mathMethod = (operator, by) => {
        this.setState((prevState) => {
                switch (operator) {
                    case '-':
                        return {counter: prevState.counter - by, name: 'berk'}
                    case '*':
                        return {counter: prevState.counter * by}
                    case '/':
                        return {counter: prevState.counter / by}
                    default:
                        return {counter: prevState.counter + by}
                }
            }
        )
    }
}

class CounterButton extends Component {

    render() {
        return (
            <div className="counter">
                <button
                    onClick={() => this.props.mathMethod('+', this.props.by)}>+{this.props.by}</button>
                <button
                    onClick={() => this.props.mathMethod('-', this.props.by)}>-{this.props.by}</button>
                <button
                    onClick={() => this.props.mathMethod('*', this.props.by)}>*{this.props.by}</button>
                <button
                    onClick={() => this.props.mathMethod('/', this.props.by)}>/{this.props.by}</button>
            </div>
        );

    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter