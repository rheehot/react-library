import * as React from 'react';
import './Counter.css';
import MyButton from "../common/form/MyButton";

const Counter = ({ value, color, onIncrement, onDecrement}) => {
    return (
        <div className="Counter">
            <h1 style={{ color }}>{value}</h1>
            <MyButton onClickHandler={onIncrement}>+</MyButton>
            <MyButton onClickHandler={onDecrement}>-</MyButton>
        </div>
    );
};

export default Counter;
