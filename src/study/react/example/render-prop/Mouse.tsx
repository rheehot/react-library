import * as React from "react";
import {RefObject} from "react";

interface AppProp {
    render: any
}

interface AppState {
    x: number,
    y: number
}

export default class Mouse extends React.Component<AppProp, AppState> {

    mouseWrap: RefObject<any> = React.createRef();

    constructor(props: AppProp) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        };
    }

    mouseMove = (event: React.MouseEvent<HTMLElement>) => {

        this.setState({
            x: event.clientX - this.mouseWrap.current.parentNode.offsetLeft,
            y: event.clientY - this.mouseWrap.current.parentNode.offsetTop
        });
    };

    mouseToggle = () => {
        this.mouseWrap.current.classList.toggle("active");
    };

    render() {
        return (
            <div ref={this.mouseWrap} className="mouse-wrap" onMouseMove={this.mouseMove} onMouseOver={this.mouseToggle}
                 onMouseOut={this.mouseToggle}>
                현재 좌표: {this.state.x} / {this.state.y}

                <div className="mouse-pointer" style={{left: this.state.x, top: this.state.y}}>
                    {this.props.render}
                </div>
            </div>
        );
    }
}
