import * as React from 'react';
import Counter from "./Counter";
import {store} from "../../../store/store";
import {CounterAction} from "../../../store/modules/counter";
import {connect} from "react-redux";

export class CounterContainer extends React.Component {
    handleIncrement = () => {
        store.dispatch({type: CounterAction.INCREMENT, payload: {test: 123}});
    };
    handleDecrement = () => {
        store.dispatch({type: CounterAction.DECREMENT, payload: {test: 123}});
    };
    render() {

        console.log(store.getState());
        const color = store.getState().color.color;
        const number = store.getState().counter.number;

        return (
            <Counter
                color={color}
                value={number}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />
        );
    }
}

const mapStateToProps = (res) => {

    console.log(res);
    return {number: res.counter.number};
};

export default connect(mapStateToProps)(CounterContainer);
