import * as React from "react"
import usePrevious from "../../../../../utils/custom/usePrevious";

interface AppProp {
    referenceProp: Array<number>
}

export default function UsePrevPropChild(props: AppProp) {

    const prevReferenceProp = usePrevious(props.referenceProp);

    return (
        <div className="UsePrevPropChild-wrap">
            기존 props = {prevReferenceProp}<br/>
            부모에게 받은 props = {props.referenceProp}
        </div>
    )
}
