import * as React from "react";
import {useEffect, useState} from "react";
import MyButton from "../../../../../components/form/MyButton";

export default function HooksSecondParam() {

    const [num1, setNum1] = useState(0); 
    const [num2, setNum2] = useState(0);

    useEffect(() => {

        console.log("use effect call");

    }, [num1, num2]);

    function changeNum1() {
        setNum1((prevNum1 => prevNum1 + 1));
    }

    function changeNum2() {
        setNum2(prevNum2 => prevNum2 + 1);
    }

    return (
        <div className="component-wrap">
            <MyButton onClickHandler={changeNum1}>num1+</MyButton>
            <MyButton onClickHandler={changeNum2}>num2+</MyButton>
            <div>{num1}</div>
            <div>{num2}</div>
        </div>
    )
}
