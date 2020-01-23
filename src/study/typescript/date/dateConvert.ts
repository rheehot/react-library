import {Day} from "./enums/Day";
import {DayContraction} from "./enums/DayContraction";
import {Month} from "./enums/Month";
import {MonthContraction} from "./enums/MonthContraction";

export function dayConvert(date: Date = new Date()): string {
    return Day[date.getUTCDay()];
}
export function dayContractionConvert(date: Date = new Date()): string {
    return DayContraction[date.getUTCDay()];
}
export function monthConvert(date: Date = new Date()): string {
    return Month[date.getUTCMonth()];
}
export function monthContractionConvert(date: Date = new Date()): string {
    return MonthContraction[date.getUTCMonth()];
}
