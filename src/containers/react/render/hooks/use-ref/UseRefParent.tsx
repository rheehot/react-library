import * as React from "react"
import UseRefChild from "./UseRefChild";
import MyButton from "../../../../../components/form/MyButton";
import {useState} from "react";

export default function UseRefParent() {

    const [referenceProp, setReferenceProp] = useState([1, 2, 3]);

    function setStateReferenceProp() {

        setReferenceProp(prevState => [...prevState, prevState.length + 1]);
    }

    return (
        <div className="UseRefParent-wrap">
            <MyButton onClickHandler={setStateReferenceProp}>자식에게주는props변경</MyButton>
            <UseRefChild referenceProp={referenceProp}/>
        </div>
    )
}
