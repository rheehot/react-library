import * as React from "react";
import "./form.scss";

interface AppProp {
    buttonText: string,
    labelText: string
}

interface AppState {

}

export default class FormInputButton extends React.Component<AppProp, AppState> {

    static defaultProps = {
        labelText: ""
    };

    renderLabel = (this.props.labelText) ? <label htmlFor="">{this.props.labelText}</label> : '';

    render() {
        return (
            <div className="form-item">
                {this.renderLabel}
                <div className="form-item-inner">
                    <input/>
                    <button>{this.props.buttonText}</button>
                </div>
            </div>
        )
    }
}
