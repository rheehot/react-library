import * as React from "react";
import {ReactNode, useRef, useState, MouseEvent} from "react";

interface AppProp {
    render: ReactNode
}

export default function Mouse(props: AppProp) {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const mouseWrap = useRef(null);
    
    function mouseMove(event: MouseEvent<HTMLElement>) {

        setX(event.clientX - mouseWrap.current.parentNode.offsetLeft);
        setY(event.clientY - mouseWrap.current.parentNode.offsetTop);
    }

    function mouseToggle() {
        mouseWrap.current.classList.toggle("active");
    }

    return (
        <div ref={mouseWrap} className="mouse-wrap" onMouseMove={mouseMove} onMouseOver={mouseToggle} onMouseOut={mouseToggle}>
            현재 좌표: {x} / {y}

            <div className="mouse-pointer" style={{left: x, top: y}}>
                {props.render}
            </div>
        </div>
    );
}
