import * as React from "react";
import MyButton from "../../../../components/form/MyButton";
import {useState} from "react";

export default function Counter() {

    const [currentCount, setCurrentCount] = useState(0);

    const decrease = () => {
        setCurrentCount(prevCount => {
            return prevCount - 1;
        })
    };
    const increase = () => {
        setCurrentCount(prevCount => {
            return prevCount + 1;
        });
    };

    return (
        <div className="Counter-wrap">
            <h1>카운터</h1>
            <h2>{currentCount}</h2>
            <MyButton onClickHandler={increase}>+</MyButton>
            <MyButton onClickHandler={decrease}>-</MyButton>
        </div>
    )
};
