import * as React from "react";

export const FunctionalMemoChild = React.memo(function (props: { primitiveProp: number, referenceProp: Array<number> }) {

    console.log("FunctionalMemoChild 실행");

    return (
        <div>
            부모에게 받은 primitiveProp: {props.primitiveProp}<br/>
            부모에게 받은 referenceProp: {props.primitiveProp}
        </div>
    )
});
