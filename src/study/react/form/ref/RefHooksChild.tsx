import * as React from "react";
import {ChangeEvent, RefObject} from "react";

interface AppProp {
    inputRef: RefObject<HTMLInputElement>,
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    inputValue: string
}

export default function RefHooksChild(props: AppProp) {

    return (
        <input ref={props.inputRef} onChange={props.onChangeHandler} value={props.inputValue} />
    )
}
