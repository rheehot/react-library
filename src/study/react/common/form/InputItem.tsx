import * as React from "react";
import {ChangeEventHandler} from "react";
import MyInput from "./MyInput";

interface AppProp {
    labelText: string,
    onChangeHandler: ChangeEventHandler,
    inputValue: string | number
}

interface AppState {

}

export default class InputItem extends React.Component<AppProp, AppState> {

    render() {
        return (
            <div className="responsive-form-item">
                <label className="my-label">{this.props.labelText}</label>
                <MyInput inputValue={this.props.inputValue} onChangeHandler={this.props.onChangeHandler}/>
            </div>
        )
    }
}
