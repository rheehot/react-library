import * as React from "react";
import {Component} from "react";
import ComponentInfo from "../../common/redux/ComponentInfo";
import {connect} from "react-redux";
import {RootState, store} from "../store";
import {MapStateOneAction} from "../one";
import MyButton from "../../common/form/MyButton";

interface AppProp {
    primitiveState: number,
    referenceState: Array<number>
}

class OneContainer extends Component<AppProp> {

    increase() {
        store.dispatch({type: MapStateOneAction.INCREASE});
    }

    decrease() {
        store.dispatch({type: MapStateOneAction.DECREASE});
    }

    render() {
        return (
            <div className="MapStateOneContainer-wrap">
                <ComponentInfo primitiveProp={this.props.primitiveState} referenceProp={this.props.referenceState} message={"Case 2"}/>
                <MyButton onClickHandler={this.increase}>dispatch increase</MyButton>
                <MyButton onClickHandler={this.decrease}>dispatch decrease</MyButton>
            </div>
        )
    }
}

function mapState(state: RootState) {
    return {
        primitiveState: state.one.primitiveState,
        referenceState: state.one.referenceState,
    }
}

export default connect(mapState)(OneContainer)
