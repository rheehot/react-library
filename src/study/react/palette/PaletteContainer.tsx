import * as React from "react";
import {changeColor, Color, CounterState} from "../../../store/modules/counter";
import {connect} from "react-redux";
import Palette from "./Palette";
import "./Palette.css";
import Counter from "./Counter";
import CounterContainer from "./CounterContainer";

interface AppProp {
}

interface AppState {

}

class PaletteContainer extends React.PureComponent<AppProp, AppState> {

    constructor(props: AppProp) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(color: Color) {
        const {changeColor} = this.props;
        console.log("handleSelect call");
        changeColor(color);
    }

    render() {

        const {color} = this.props;

        return (
            <>
                <Palette onSelect={this.handleSelect} selected={color}></Palette>
                <CounterContainer/>
            </>
        )
    }
}

const mapStateToProps = (state: CounterState) => {
    console.log(state);
    return {color: state.counter.color}
};

const mapDispatchToProps = dispatch => {
    return {changeColor: (color: Color) => dispatch(changeColor(color))}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PaletteContainer);
