import * as React from "react";
import {Component} from "react";
import ComponentInfo from "../../../../components/redux/ComponentInfo";
import {connect} from "react-redux";
import MyButton from "../../../../components/form/MyButton";
import MapStateProp from "./MapStateProp";
import {RootState} from "../../../../redux/store";
import {twoDecrease, twoIncrease} from "../../../../redux/modules/two";

interface AppProp extends MapStateProp{
    twoIncrease: (num: number) => void,
    twoDecrease: (num: number) => void
}

class TwoContainer extends Component<AppProp> {

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
                <MyButton onClickHandler={() => this.props.twoIncrease(2)}>dispatch increase</MyButton>
                <MyButton onClickHandler={() => this.props.twoDecrease(2)}>dispatch decrease</MyButton>
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

const mapDispatch = {
    twoIncrease, twoDecrease
};

export default connect(mapState, mapDispatch)(TwoContainer)
