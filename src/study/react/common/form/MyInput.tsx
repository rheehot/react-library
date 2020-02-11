import * as React from "react";
import {ChangeEventHandler} from "react";

interface AppProp {
    onChangeHandler: ChangeEventHandler,
    inputValue: string
}

interface AppState {

}

export default class MyInput extends React.Component<AppProp, AppState> {

    render() {
        return (
          <input className="my-input" value={this.props.inputValue} onChange={this.props.onChangeHandler}/>
        )
    }
}
