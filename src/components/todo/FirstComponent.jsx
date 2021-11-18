import {Component} from "react";
import welcomePicture from './assets/welcome.jpg';

class FirstComponent extends Component {
    render() {
        return (
                <img src={welcomePicture} alt="WelcomePage"/>

        )
    }
}

export default FirstComponent