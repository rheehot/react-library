import * as React from "react"
import {TwoDataType} from "../../interfaces/TwoDataType";

interface TwoDataTypeInfoProp extends TwoDataType {
    message: string;
}

export default function TwoDataTypeInfo(props: TwoDataTypeInfoProp) {

    return (
        <div className="TwoDataTypeInfo-wrap">
            <h1>{props.message}</h1>
            <span>{props.primitive}</span><br/>
            <span>{props.reference}</span>
        </div>
    )
}
