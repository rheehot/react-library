import * as React from "react"
import {connect} from "react-redux";
import {RootState} from "../../../../redux/store";
import Counter from "../../../../components/redux/Counter";
import {TwoDataType} from "../../../../interfaces/TwoDataType";
import {CounterState, decrease, increase, increaseAsync} from "../../../../redux/modules/counter";

export interface CounterProp extends TwoDataType{
    increase: typeof increase;
    decrease: typeof decrease;
    increaseAsync: typeof increaseAsync;
}

function CounterContainer(props: CounterProp) {

    return <Counter {...props}/>
}

function mapState(rootState: RootState): CounterState {

    console.log("counter map state call");

    return {
        primitive: rootState.counter.primitive,
        reference: rootState.counter.reference
    };
}

const mapDispatch = {
    increase, decrease, increaseAsync
}

export default connect(mapState, mapDispatch)(CounterContainer)
