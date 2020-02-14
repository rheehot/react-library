import * as React from "react";
import {MouseEventHandler} from "react";
import "./form.scss";

interface AppProp {
    onClickHandler: MouseEventHandler,
    className: string
}

interface AppState {
}

export default class MyButton extends React.Component<AppProp, AppState> {

    static defaultProps = {
        className: ""
    };

    render() {
        return (
            <button className={`my-button ${this.props.className}`} onClick={this.props.onClickHandler}>
                {(this.props.children) ? this.props.children : '버튼'}
            </button>
        )
    }
}
