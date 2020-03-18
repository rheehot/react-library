import * as React from "react";
import MyButton from "../../../common/form/MyButton";

export const UseMemoComponent = () => {

    const [number, setNumber] = React.useState(0);
    const array = React.useMemo(() => [], undefined);
    // const array = React.useMemo(() => [], []);
    // const array = React.useMemo(() => []);
    // const array = [];

    const push = () => {
        array.push("x");
        console.log(array);
    };

    const setState = () => {
        setNumber(prevNumber => {
            return prevNumber + 1;
        });
    };

    const log = () => {
        console.log(number, array);
    };

    return (
        <div className="component-wrap">
            <MyButton onClickHandler={push}>Push</MyButton>
            <MyButton onClickHandler={setState}>changeState</MyButton>
            <MyButton onClickHandler={log}>log</MyButton>
        </div>
    )
};
