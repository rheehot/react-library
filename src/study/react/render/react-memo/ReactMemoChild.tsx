import * as React from "react";

interface AppProp {
    primitiveProp: number
}

export const ReactMemoChild = React.memo((props: AppProp) => {

    console.log({...props});
    console.log("memo child update");

    return (
        <div className="component-wrap">
        </div>
    )
});
