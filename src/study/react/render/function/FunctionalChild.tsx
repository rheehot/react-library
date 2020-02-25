import * as React from "react";

export default function FunctionalChild(props: {primitiveProp: number, referenceProp: Array<number>}) {

    console.log("FunctionalChild 실행");

    return (
        <div>
            부모에게 받은 primitiveProp: {props.primitiveProp}<br/>
            부모에게 받은 referenceProp: {props.primitiveProp}
        </div>
    )
}
