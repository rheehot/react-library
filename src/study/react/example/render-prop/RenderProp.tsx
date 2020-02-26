import * as React from "react";
import "./RenderProp.scss"
import Mouse from "./Mouse";
import AppleCursor from "./AppleCursor";
import ReactCursor from "./ReactCursor";

export default function RenderProp() {

    return (
        <div className="RenderProp-container">
            <h3>박스 위에 커서를 올려보세요.</h3>
            <Mouse render={AppleCursor()}/>
            <Mouse render={ReactCursor()}/>
        </div>
    )
}
