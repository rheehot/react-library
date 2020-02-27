import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment, decrement, Action} from "../../../store/modules/counter";
import Counter from "./Counter";
import {store} from "../../../store/store";

class CounterContainer extends Component {
    handleIncrement = () => {
        // this.props.increment();
        console.log(store.dispatch({type: Action.INCREMENT, payload: {test: 123}}));
    };
    handleDecrement = () => {
        this.props.decrement();
    };
    render() {

        console.log(this.props);

        const { color, number } = this.props;
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

const mapStateToProps = ({ counter }) => ({
    color: counter.color,
    number: counter.number,
});

const mapDispatchToProps = { increment, decrement };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);
