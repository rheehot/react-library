export default function timeUnit(second: number, minute: number = 0, hour: number = 0) {

    let _hour = hour * 3600 * 1000 || 0;
    let _minute = minute * 60 * 1000 || 0;
    let _second = second * 1000 || 0;
    return _hour + _minute + _second;
}
