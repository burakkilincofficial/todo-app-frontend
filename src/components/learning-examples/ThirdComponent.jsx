//class component
import {Component} from "react";

class ThirdComponent extends Component {
    render() {
        return (
            <div className="secondComponent">
                ThirdComponent </div>
        );
    }
}

export function FourthComponent() {
    return (
        <div className="secondComponent">
            FourthComponent </div>
    );
}


export default ThirdComponent;