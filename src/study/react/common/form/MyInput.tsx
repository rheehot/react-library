import * as React from "react";

interface AppProp {
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
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

