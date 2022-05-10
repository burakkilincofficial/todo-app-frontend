import {Component} from "react";
import sspng from './assets/sspng.png';

class FirstComponent extends Component {
    render() {
        return (
            <div className="fill">
                <img src={sspng} alt="WelcomePage"/>
            </div>


        )
    }
}

export default FirstComponent