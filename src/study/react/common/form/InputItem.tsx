import * as React from "react";
import {MyInput} from "./MyInput";
import {ChangeEvent, RefObject, forwardRef} from "react";

interface AppProp {
    labelText: string,
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
}

export const InputItem = forwardRef((props: AppProp, ref: RefObject<HTMLInputElement>) => {

    return (
        <div className="responsive-form-item">
            <label className="my-label">{props.labelText}</label>
            <MyInput ref={ref} inputValue={props.inputValue} onChangeHandler={props.onChangeHandler}/>
        </div>
    )
});
