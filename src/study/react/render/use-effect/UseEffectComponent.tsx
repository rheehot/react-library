import * as React from "react";
import MyButton from "../../common/form/MyButton";

export const UseEffectComponent = () => {

    const [number, setNumber] = React.useState(0);
    const [array, setArray] = React.useState([0]);

    //ComponentDidUpdate
    React.useEffect(() => {

        console.log("2번쨰 parameter없는 effect 실행");

        return () => console.log("2번쨰 parameter없는 effect 종료");
    });

    //ComponentDidMount
    React.useEffect(() => {

        console.log("2번째 parameter가 빈배열인 effect 실행");

        return () => console.log("2번째 parameter가 빈배열인 effect 종료");

    }, []);

    //ComponentDidUpdate + 괄호안에 변수가 변경되었을 때만.
    React.useEffect(() => {

        console.log("2번째 paremeter가 number(state)인 effect 실행");

        return () => console.log("2번째 paremeter가 number(state)인 effect 종료");
    }, [number]);

    //ComponentDidUpdate + 괄호안에 변수가 변경되었을 때만.
    React.useEffect(() => {

        console.log("2번째 parameter가 array(state)인 effect 실행");

        return () => console.log("2번째 parameter가 array(state)인 effect 종료");
    }, [array]);

    console.log("return 직전");

    return (
        <div>
            <h1>UseEffectTest</h1>
            <MyButton onClickHandler={() => {setNumber(0)}}>setState(값유지)</MyButton>
            <MyButton onClickHandler={() => {setNumber(prevNumber => prevNumber + 1)}}>setState(num값변경)</MyButton>
            <MyButton onClickHandler={() => {setArray(prevArray => [...prevArray, prevArray[0]])}}>setState(array값 변경)</MyButton>
        </div>
    )
};
