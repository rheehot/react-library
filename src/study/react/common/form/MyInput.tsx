import * as React from "react";
import {ChangeEvent, forwardRef, RefObject} from "react";

interface AppProp {
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
    className?: string,
    type?: string,
    showIncreaseDecreaseButton?: boolean
}

export const MyInput = forwardRef((props: AppProp, ref: RefObject<HTMLInputElement>) => {

    return (
        <input type={props.type} ref={ref}
               value={props.inputValue} onChange={props.onChangeHandler}
               className={`my-input ${props.className} ${ props.showIncreaseDecreaseButton ? "" : "hidden-increase-decrease-button" }`}/>
    )
});

MyInput.defaultProps = {
    className: ""
};

