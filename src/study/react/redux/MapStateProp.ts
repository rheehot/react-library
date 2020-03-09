export default interface MapStateProp {
    primitiveState: number,
    referenceState: Array<number>,
    increase: () => void,
    decrease: () => void,
}
