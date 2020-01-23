import {DayKor} from "./DayKor";
import {DayEng} from "./DayEng";

export function dayConvertKor(): string {
    return DayKor[new Date().getUTCDay()];
}

export function dayConvertEng(): string {
    return DayEng[new Date().getUTCDay()];
}
