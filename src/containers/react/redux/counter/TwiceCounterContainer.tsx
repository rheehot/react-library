import * as React from "react"
import {connect} from "react-redux";
import TwiceCounter from "../../../../components/redux/TwiceCounter";
import {TwoDataType} from "../../../../interfaces/TwoDataType";
import {notChange, TwiceCounterState, twiceDecrease, twiceIncrease} from "../../../../redux/modules/twiceCounter";
import {RootState} from "../../../../redux/store";

export interface TwiceCounterProp extends TwoDataType {
    twiceIncrease: typeof twiceIncrease;
    twiceDecrease: typeof twiceDecrease;
    notChange: typeof notChange;
}

function TwiceCounterContainer(props: TwiceCounterProp) {

    return <TwiceCounter {...props}/>
}

function mapState(rootState: RootState): TwiceCounterState {

    console.log("twice counter map state call");

    return {
        primitive: rootState.twiceCounter.primitive,
        reference: rootState.twiceCounter.reference
    };
}

const mapDispatch = {
    twiceIncrease, twiceDecrease, notChange
};

export default connect(mapState, mapDispatch)(TwiceCounterContainer)
