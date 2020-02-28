import * as React from "react";
import MyInput from "./MyInput";
import {RefObject} from "react";

interface AppProp {
    labelText: string,
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
    inputRef?: RefObject<HTMLInputElement>
}

export default function InputItem(props: AppProp) {

    return (
        <div className="responsive-form-item">
            <label className="my-label">{props.labelText}</label>
            <MyInput ref={props.inputRef} inputValue={props.inputValue} onChangeHandler={props.onChangeHandler}/>
        </div>
    )
}
