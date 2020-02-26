import * as React from "react";

interface AppProp {
    render: any
}

export default function Mouse(props: AppProp) {

    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);
    const mouseWrap = React.useRef(null);
    
    function mouseMove(event: React.MouseEvent<HTMLElement>) {

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
