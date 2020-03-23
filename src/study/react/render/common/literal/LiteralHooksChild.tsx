import * as React from "react"
import {useEffect, useState} from "react"
import usePrevious from "../../../common/custom/usePrevious";
import {LiteralTestProp} from "./LiteralTestProp";

export default function LiteralHooksChild(props: LiteralTestProp) {

    const prevProps = usePrevious(props, props);

    useEffect(() => {

        console.log("hooks literal--", prevProps.literalFunc === props.literalFunc);
        console.log("hooks notLiteral--", prevProps.notLiteralFunc === props.notLiteralFunc);
    });

    return (
        <div className="LiteralHooksChild-wrap">
            hooks child
        </div>
    )
}
