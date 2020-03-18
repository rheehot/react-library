import * as React from "react"
import {useEffect, useRef} from "react";

interface AppProp {
    referenceProp: Array<number>;
}

export default function UseRefChild(props: AppProp) {

    const prevProps = useRef<Array<number>>([]);

    useEffect(() => {
        prevProps.current = props.referenceProp;
        console.log("prev-props=", prevProps.current);
    });

    console.log("props=", props.referenceProp);
    console.log("child component render");

    return (
        <div className="UseRefChild-wrap">
            기존 referenceProp = {prevProps.current}<br/>
            부모에게 받은 referenceProp = {props.referenceProp}
        </div>
    );
}
