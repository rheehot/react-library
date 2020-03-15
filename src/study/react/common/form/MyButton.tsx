import * as React from "react";
import "./form.scss";
import {ReactNode, MouseEvent} from "react";

interface AppProp {
    onClickHandler: (event: MouseEvent<HTMLButtonElement>) => void,
    className: string,
    children: ReactNode,
    type?: "button" | "submit" | "reset";
    disable: boolean
}

export default function MyButton(props: AppProp) {

    return (
        <button type={props.type} className={`my-button ${props.className} ${ props.disable ? "button-disable" : ""}`} onClick={props.onClickHandler}>
            {(props.children) ? props.children : '버튼'}
        </button>
    )
};

MyButton.defaultProps = {
    className: "",
    children: "버튼",
    disable: false
};
