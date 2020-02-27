import * as React from "react";
import Palette from "./Palette";
import "./Palette.css";
import CounterContainer from "./CounterContainer";
import {Color, ColorAction} from "../../../store/modules/color";
import {store} from "../../../store/store";

interface AppProp {
}

interface AppState {

}

export default class PaletteContainer extends React.PureComponent<AppProp, AppState> {

    constructor(props: AppProp) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(color: Color) {
        store.dispatch({type: ColorAction.CHANGE, color: color});
    }

    render() {

        const color = store.getState().color.color;

        return (
            <>
                <Palette onSelect={this.handleSelect} selected={color}></Palette>
                <CounterContainer/>
            </>
        )
    }
}
