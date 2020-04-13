import * as React from "react"
import "./Modal.scss";
import {ReactNode} from "react";

interface AppProp {
    children: ReactNode;
    open: boolean;
}

export default function Modal(props: AppProp) {

    const display = (props.open) ? "block" : "none";

    if(props.open) {
        document.body.style.overflow = "hidden";

    } else {
        document.body.style.overflow = "auto";
    }

    return (
        <div style={{display}} className="Modal-wrap">
            <div className="modal-content">
                {props.children}
            </div>
        </div>
    )
}

Modal.defauptProps = {
    open: false
};
