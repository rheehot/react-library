export enum MapStateTwoAction {
    INCREASE,
    DECREASE
}

const initialState = {
    primitiveState: 1,
    referenceState: [1, 2, 3]
};

export default function twoReducer(state = initialState, action: {type: MapStateTwoAction}) {

    switch(action.type) {
        case MapStateTwoAction.INCREASE:
            return {
                primitiveState: state.primitiveState + 1,
                referenceState: [...state.referenceState, state.primitiveState]
            };

        case MapStateTwoAction.DECREASE:
            return {
                primitiveState: state.primitiveState - 1,
                referenceState: [...state.referenceState, state.primitiveState]
            };

        default:
            return state;
    }
}
