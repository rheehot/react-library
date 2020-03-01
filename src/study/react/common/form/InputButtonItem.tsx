import * as React from "react";
import {MyInput} from "./MyInput";
import MyButton from "./MyButton";
import "./form.scss";
import {ChangeEvent, MouseEvent} from "react";

interface AppProp {
    labelText: string,
    buttonText: string,
    inputValue: string,
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    onClickHandler: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function InputButtonItem(props: AppProp) {

    return (
        <div className="responsive-form-item">
            <label>{props.labelText}</label>
            <MyInput className="delete-right-radius-border" inputValue={props.inputValue} onChangeHandler={props.onChangeHandler}/>
            <MyButton className="delete-left-radius-border" onClickHandler={props.onClickHandler}>{props.buttonText}</MyButton>
        </div>
    )
}

InputButtonItem.defaultProps = {
    labelText: ""
};
