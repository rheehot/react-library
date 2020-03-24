import * as React from "react"
import {useState} from "react";
import MyButton from "../../../../../components/form/MyButton";
import UsePrevPropChild from "./UsePrevPropChild";

export default function UsePrevPropParent() {

    const [referenceProp, setReferenceProp] = useState([1, 2, 3]);
    
    function setStateReferenceProp() {
        setReferenceProp(prevState => [...prevState, prevState.length + 1]);
    }
    
    return (
        <div className="UsePrevPropParent-wrap">
            <MyButton onClickHandler={setStateReferenceProp}>자식에게넘기는prop변경</MyButton>
            <UsePrevPropChild referenceProp={referenceProp}/>
        </div>
    )
}
