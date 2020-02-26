import * as React from "react";
import {MouseEventHandler} from "react";
import "./form.scss";

interface AppProp {
    onClickHandler: MouseEventHandler<HTMLButtonElement>,
    className: string,
    children: React.ReactNode
}

export default function MyButton(props: AppProp) {

    return (
        <button className={`my-button ${props.className}`} onClick={props.onClickHandler}>
            {(props.children) ? props.children : '버튼'}
        </button>
    )
};

MyButton.defaultProps = {
    className: "",
    children: "버튼"
};
