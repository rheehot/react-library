import * as React from "react"
import "./RadioButton.scss";

interface AppProp {
    btnName: string;
    onChangeHandler: (checkValue: string) => void;
    checkValue: string;
    currentValue: string;
}

export default function RadioButton(props: AppProp) {

    const active = (props.checkValue === props.currentValue) ? "active" : "";

    return (
        <button onClick={() => props.onChangeHandler(props.checkValue)} className={`RadioButton-wrap ${active}`}>{props.btnName}</button>
    )
}
