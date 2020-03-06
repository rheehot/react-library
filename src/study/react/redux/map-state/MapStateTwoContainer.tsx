import * as React from "react";
import {Component} from "react";
import ComponentInfo from "../../common/redux/ComponentInfo";
import {connect} from "react-redux";
import {store} from "../store";
import MyButton from "../../common/form/MyButton";
import {MapStateTwoAction} from "../two";

interface AppProp {
    primitiveState: number,
    referenceState: Array<number>
}

class MapStateTwoContainer extends Component<AppProp> {

    increase() {
        store.dispatch({type: MapStateTwoAction.INCREASE});
    }

    decrease() {
        store.dispatch({type: MapStateTwoAction.DECREASE});
    }

    render() {

        console.log("two props", this.props);

        return (
            <div className="MapStateTwoContainer-wrap">
                <ComponentInfo primitiveProp={this.props.primitiveState} referenceProp={this.props.referenceState} message={"Case 2"}/>
                <MyButton onClickHandler={this.increase}>dispatch increase</MyButton>
                <MyButton onClickHandler={this.decrease}>dispatch decrease</MyButton>
            </div>
        )
    }
}

function mapState(state: any) {

    console.log("two state", state);

    return {
        primitiveState: state.two.primitiveState,
        referenceState: state.two.referenceState,
    }
}

export default connect(mapState)(MapStateTwoContainer)
