import * as React from "react"
import {connect} from "react-redux";
import {CounterState, decrease, increase} from "../../../../redux/modules/counter";
import {RootState} from "../../../../redux/store";
import Counter from "../../../../components/redux/Counter";
import {TwoDataType} from "../../../../interfaces/TwoDataType";

export interface CounterProp extends TwoDataType{
    increase: () => void
    decrease: () => void
}

function CounterContainer(props: CounterProp) {

    return <Counter {...props}/>
}

function mapState(rootState: RootState): CounterState {

    return {
        primitive: rootState.counter.primitive,
        reference: rootState.counter.reference
    };
}

const mapDispatch = {
    increase, decrease
}

export default connect(mapState, mapDispatch)(CounterContainer)
