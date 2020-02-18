import * as React from "react";
import {ChangeEventHandler} from "react";

interface AppProp {
    onChangeHandler: ChangeEventHandler<HTMLInputElement>,
    inputValue: string,
    className: string
}

interface AppState {

}

export default class MyInput extends React.Component<AppProp, AppState> {

    static defaultProps = {
        className: ""
    };

    render() {
        return (
          <input className={`my-input ${this.props.className}`} value={this.props.inputValue} onChange={this.props.onChangeHandler}/>
        )
    }
}
