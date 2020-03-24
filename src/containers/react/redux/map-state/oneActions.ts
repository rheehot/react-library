import {MapStateOneAction} from "../one";

export function increase(num: number) {
    return {type: MapStateOneAction.INCREASE, payload: num};
}

export function decrease() {
    return {type: MapStateOneAction.DECREASE};
}
