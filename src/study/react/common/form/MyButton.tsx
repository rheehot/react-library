import * as React from "react";
import "./form.scss";
import {ReactNode, MouseEvent} from "react";

interface AppProp {
    onClickHandler: (event: MouseEvent<HTMLButtonElement>) => void,
    className: string,
    children: ReactNode,
    type?: "button" | "submit" | "reset";
}

export default function MyButton(props: AppProp) {

    return (
        <button type={props.type} className={`my-button ${props.className}`} onClick={props.onClickHandler}>
            {(props.children) ? props.children : '버튼'}
        </button>
    )
};

MyButton.defaultProps = {
    className: "",
    children: "버튼"
};
