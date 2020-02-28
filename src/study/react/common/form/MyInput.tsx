import * as React from "react";
import {RefObject} from "react";

interface AppProp {
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
    className: string,
    ref?: RefObject<HTMLInputElement>
}

export default function MyInput(props: AppProp) {

    return (
        <input ref={props.ref} className={`my-input ${props.className}`} value={props.inputValue} onChange={props.onChangeHandler}/>
    )
};

MyInput.defaultProps = {
    className: ""
};

