import * as React from "react";
import "./form.scss";
import {ChangeEvent} from "react";

interface AppProp {
    buttonText: string,
    labelText: string,
    inputSetState: (event: ChangeEvent<HTMLInputElement>) => void
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
                    <input onChange={this.props.inputSetState}/>
                    <button>{this.props.buttonText}</button>
                </div>
            </div>
        )
    }
}
