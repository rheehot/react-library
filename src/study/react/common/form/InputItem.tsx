import * as React from "react";
import {ChangeEventHandler} from "react";
import MyInput from "./MyInput";

interface AppProp {
    labelText: string,
    onChangeHandler: ChangeEventHandler,
    inputValue: string | number
}

export default function InputItem(props: AppProp) {

    return (
        <div className="responsive-form-item">
            <label className="my-label">{props.labelText}</label>
            <MyInput inputValue={props.inputValue} onChangeHandler={props.onChangeHandler}/>
        </div>
    )
}
