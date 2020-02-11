import * as React from "react";
import {ChangeEventHandler, MouseEventHandler} from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import "./form.scss";

interface AppProp {
		labelText: string,
		inputValue: string,
		onChangeHandler: ChangeEventHandler,
		onClickHandler: MouseEventHandler
}

interface AppState {

}

export default class InputButtonItem extends React.Component<AppProp, AppState> {

		render() {
				return (
						<div className="form-item">
								<label>{this.props.labelText}</label>
								<MyInput inputValue={this.props.inputValue} onChangeHandler={this.props.onChangeHandler}/>
								<MyButton onClickHandler={this.props.onClickHandler} />
						</div>
				)
		}
}
