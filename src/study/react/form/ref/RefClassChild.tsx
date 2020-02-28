import * as React from "react";
import {RefObject} from "react";

interface AppProp {

    inputRef: RefObject<HTMLInputElement>,
    inputValue: string,
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface AppState {

}

export default class RefClassChild extends React.PureComponent<AppProp, AppState> {

    render() {
        return (
            <input ref={this.props.inputRef} value={this.props.inputValue} onChange={this.props.onChangeHandler} />
        )
    }
}
