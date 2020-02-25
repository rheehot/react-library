import * as React from "react";
import {CircleSymbolEnum} from "./CircleSymbolEnum";
import "./CircleSymbol.scss";

interface AppProp {
    colorIndex: number
}

interface AppState {

}

export default class CircleSymbol extends React.PureComponent<AppProp, AppState> {

    constructor(props: AppProp) {
        super(props);

        this.circleColorClass = this.circleColorClass.bind(this);
    }

    circleColorClass() {

        return CircleSymbolEnum[this.props.colorIndex];
    }

    render() {
        return (
            <div className={`circle ${this.circleColorClass()}`}>
            </div>
        )
    }
}
