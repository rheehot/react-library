import * as React from "react";
import {ChangeEvent, forwardRef, RefObject} from "react";

interface AppProp {
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
    className?: string,
}

export const MyInput = forwardRef((props: AppProp, ref: RefObject<HTMLInputElement>) => {

    return (
        <input ref={ref} className={`my-input ${props.className}`} value={props.inputValue} onChange={props.onChangeHandler}/>
    )
});

MyInput.defaultProps = {
    className: ""
};

