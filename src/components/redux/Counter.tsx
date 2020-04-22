import * as React from "react"
import TwoDataTypeInfo from "./TwoDataTypeInfo";
import MyButton from "../form/MyButton";
import {CounterProp} from "../../containers/react/redux/counter/CounterContainer";

export default function Counter(props: CounterProp) {
    
    return (
        <div className="Counter-wrap">
            <TwoDataTypeInfo primitive={props.primitive} reference={props.reference}/>
            <MyButton onClickHandler={props.increase}>+</MyButton>
            <MyButton onClickHandler={props.decrease}>-</MyButton>
        </div>
    )
}
