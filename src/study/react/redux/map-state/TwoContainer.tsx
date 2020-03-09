import * as React from "react";
import {Component} from "react";
import ComponentInfo from "../../common/redux/ComponentInfo";
import {connect} from "react-redux";
import {RootState} from "../store";
import MyButton from "../../common/form/MyButton";
import {MapStateTwoAction} from "../two";
import MapStateProp from "../MapStateProp";

class TwoContainer extends Component<MapStateProp> {

    shouldComponentUpdate(nextProps: Readonly<MapStateProp>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log("two container shouldComponentUpdate");
        console.log("prev, next props", this.props, nextProps);
        return true;
    }

    render() {

        console.log("two container render call");

        return (
            <div className="MapStateTwoContainer-wrap">
                <ComponentInfo primitiveProp={this.props.primitiveState} referenceProp={this.props.referenceState} message={"Case 2"}/>
                <MyButton onClickHandler={this.props.increase}>dispatch increase</MyButton>
                <MyButton onClickHandler={this.props.decrease}>dispatch decrease</MyButton>
            </div>
        )
    }
}

function mapState(state: RootState) {

    return {
        primitiveState: state.two.primitiveState,
        referenceState: state.two.referenceState,
    }
}

function mapDispatch(dispatch: Function) {

    return {
        increase: () => dispatch({type: MapStateTwoAction.INCREASE}),
        decrease: () => dispatch({type: MapStateTwoAction.DECREASE})
    }
}

export default connect(mapState, mapDispatch)(TwoContainer)
