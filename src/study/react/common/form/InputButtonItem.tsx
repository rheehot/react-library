import * as React from "react";
import {ChangeEventHandler, MouseEventHandler} from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import "./form.scss";

interface AppProp {
    labelText: string,
	buttonText: string,
    inputValue: string,
    onChangeHandler: ChangeEventHandler<HTMLInputElement>,
    onClickHandler: MouseEventHandler<HTMLButtonElement>
}

interface AppState {

}

export default class InputButtonItem extends React.Component<AppProp, AppState> {

	static defaultProps = {
		labelText: ""
	};

    render() {
        return (
            <div className="form-item">
                <label>{this.props.labelText}</label>
                <MyInput inputValue={this.props.inputValue} onChangeHandler={this.props.onChangeHandler}/>
                <MyButton onClickHandler={this.props.onClickHandler}>{this.props.buttonText}</MyButton>
            </div>
        )
    }
}