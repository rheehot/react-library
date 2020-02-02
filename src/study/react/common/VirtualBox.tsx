import * as React from "react";

interface AppProp {
    width: string;
    height: string;
    square: string;
}

interface AppState {
    _width: string,
    _height: string
}

export default class VirtualBox extends React.Component<AppProp, AppState> {

    static defaultProps = {
        width: "100px",
        height: "100px",
        square: ""
    };

    constructor(props: any) {
        super(props);

        this.state = {
            _width: (this.props.square) ? this.props.square : this.props.width,
            _height: (this.props.square) ? this.props.square : this.props.height
        };
    }

    render() {
        return (
            <div style={{width: this.state._width, height: this.state._height, background: "red"}} className="component-wrap">
            </div>
        )
    }
}
