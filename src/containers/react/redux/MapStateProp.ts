export default interface MapStateProp {
    primitiveState: number,
    referenceState: Array<number>,
    increase: (num: number) => void,
    decrease: () => void,
}
