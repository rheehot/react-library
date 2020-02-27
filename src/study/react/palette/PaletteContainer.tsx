import * as React from "react";
import Palette from "./Palette";
import "./Palette.css";
import CounterContainer from "./CounterContainer";
import {Color, ColorAction} from "../../../store/modules/color";
import {store} from "../../../store/store";
import {connect} from "react-redux";

interface AppProp {
}

interface AppState {

}

export class PaletteContainer extends React.Component<AppProp, AppState> {

    constructor(props: AppProp) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(color: Color) {
        store.dispatch({type: ColorAction.CHANGE, color: color});
    }

    render() {

        const color = store.getState().color.color;

        /**
         * PaletteContainer의 render()가 실행됬음에도 CounterContainer의 render()는 실행되지 않았음.
         * 에러케이스는 팔레트선택했을 때 색깔 바뀌는 그 동그라미 클릭했는데.
         */
        return (
            <>
                <Palette onSelect={this.handleSelect} selected={color}></Palette>
                <CounterContainer/>
            </>
        )
    }
}

/**
 * store에서 state가 바뀔 때 마다 이거실행되고
 */
const mapStateToProps = (res) => {

    console.log(res);
    return {color: res.color.color};
};

export default connect()(PaletteContainer);
