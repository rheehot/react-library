import * as React from "react";
import MyButton from "../../common/form/MyButton";

export default function Counter() {

    const [currentCount, setCurrentCount] = React.useState(0);

    const decrease = () => {
        setCurrentCount(prevCount => {
            console.log(prevCount);
            return prevCount - 1;
        })
    };
    const increase = () => {
        setCurrentCount(prevCount => {
            console.log(prevCount);
            return prevCount + 1;
        });
    };

    return (
        <div className="component-wrap">
            <h1>카운터</h1>
            <h2>{currentCount}</h2>
            <MyButton onClickHandler={increase}>+</MyButton>
            <MyButton onClickHandler={decrease}>-</MyButton>
        </div>
    )
};
