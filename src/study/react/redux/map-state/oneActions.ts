import {MapStateOneAction} from "../one";

export function increase() {
    return {type: MapStateOneAction.INCREASE};
}

export function decrease() {
    return {type: MapStateOneAction.DECREASE};
}
