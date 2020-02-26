import * as React from "react";
import {ChangeEventHandler} from "react";

interface AppProp {
    onChangeHandler: ChangeEventHandler<HTMLInputElement>,
    inputValue: string | number,
    className: string
}

export default function MyInput(props: AppProp) {

    return (
        <input className={`my-input ${props.className}`} value={props.inputValue} onChange={props.onChangeHandler}/>
    )
};

MyInput.defaultProps = {
    className: ""
};

