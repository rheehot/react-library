import * as React from "react";
import {Component} from "react";
import ComponentInfo from "../../../../components/redux/ComponentInfo";
import {connect} from "react-redux";
import MyButton from "../../../../components/form/MyButton";
import MapStateProp from "./MapStateProp";
import {oneDecrease, oneIncrease} from "../../../../redux/modules/one";
import {RootState} from "../../../../redux/store";

interface AppProp extends MapStateProp{
    oneIncrease: (num: number) => void,
    oneDecrease: (num: number) => void
}

class OneContainer extends Component<AppProp> {

    shouldComponentUpdate(nextProps: Readonly<MapStateProp>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log("one container shouldComponentUpdate");
        console.log("prev, next props", this.props, nextProps);
        return true;
    }

    render() {

        console.log("one container render call");

        return (
            <div className="MapStateOneContainer-wrap">
                <ComponentInfo primitiveProp={this.props.primitiveState} referenceProp={this.props.referenceState} message={"Case 2"}/>
                <MyButton onClickHandler={() => this.props.oneIncrease(1)}>dispatch increase</MyButton>
                <MyButton onClickHandler={() => this.props.oneDecrease(1)}>dispatch decrease</MyButton>
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

const mapDispatch = {
    oneIncrease, oneDecrease
};

export default connect(mapState, mapDispatch)(OneContainer)
