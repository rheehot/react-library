import * as React from "react"
import MyButton from "../form/MyButton";
import {useState} from "react";

interface AppProp {
    primitiveProp: number,
    referenceProp: Array<number>,
    message: string,
    setStateButton?: boolean
}

export default function ComponentInfo(props: AppProp) {

    const dummyUseState = useState(0);

    function setStatedummyState() {
        dummyUseState[1](prevDummayState => prevDummayState + 1);
    }

    function setStateButton() {

        if(props.setStateButton)
            return (
                <><MyButton onClickHandler={setStatedummyState}>setState call</MyButton><br/></>
            );

        else
            return null;
    }

    return (
        <div className="ComponentInfo-wrap">
            <h3>{props.message}</h3>
            {setStateButton()}
            <span>{props.primitiveProp}</span><br/>
            <span>{props.referenceProp}</span>
        </div>
    )
}
