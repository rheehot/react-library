import * as React from "react"
import {TwoDataType} from "../../interfaces/TwoDataType";

export default function TwoDataTypeInfo(props: TwoDataType) {

    return (
        <div className="TwoDataTypeInfo-wrap">
            <span>{props.primitive}</span><br/>
            <span>{props.reference}</span>
        </div>
    )
}
