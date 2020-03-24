import * as React from "react";

interface AppProp {
    primitiveProp: number,
    referenceProp: Array<number>
}

export function ReactMemoChild(props: AppProp) {

    if(props.primitiveProp < 3)
        return null;

    return (
        <div className="component-wrap">
            부모에서 받은 primitiveProp={props.primitiveProp}<br/>
            부모에서 받은 referenceProp={props.referenceProp}
        </div>
    )
}
