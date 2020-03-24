import * as React from "react"
import {useEffect, useRef} from "react";

export default function usePrevious<T>(propValue: T, initialValue: T = undefined): T {

    const ref = useRef<T>(initialValue);

    useEffect(() => {
        ref.current = propValue;
    });

    return ref.current;
}
