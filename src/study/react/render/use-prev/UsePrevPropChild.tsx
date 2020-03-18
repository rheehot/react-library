import * as React from "react"
import usePrevProps from "../../common/custom/usePrevProps";

interface AppProp {
    referenceProp: Array<number>
}

export default function UsePrevPropChild(props: AppProp) {

    const prevReferenceProp = usePrevProps(props.referenceProp);

    return (
        <div className="UsePrevPropChild-wrap">
            기존 props = {prevReferenceProp}<br/>
            부모에게 받은 props = {props.referenceProp}
        </div>
    )
}
