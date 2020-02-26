import * as React from "react";
import MyInput from "./MyInput";

interface AppProp {
    labelText: string,
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string
}

export default function InputItem(props: AppProp) {

    return (
        <div className="responsive-form-item">
            <label className="my-label">{props.labelText}</label>
            <MyInput inputValue={props.inputValue} onChangeHandler={props.onChangeHandler}/>
        </div>
    )
}
