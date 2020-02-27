import * as React from 'react';
import Counter from "./Counter";
import {store} from "../../../store/store";
import {CounterAction} from "../../../store/modules/counter";

export default class CounterContainer extends React.Component {
    handleIncrement = () => {
        // this.props.increment();
        store.dispatch({type: CounterAction.INCREMENT, payload: {test: 123}});
    };
    handleDecrement = () => {
        store.dispatch({type: CounterAction.INCREMENT, payload: {test: 123}});
    };
    render() {

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
