export enum MapStateOneAction {
    INCREASE = "map-state-one/INCREASE",
    DECREASE = "map-state-one/DECREASE",
}

const initialState = {
    primitiveState: 1,
    referenceState: [1, 2, 3]
};

export default function oneReducer(state = initialState, action: {type: MapStateOneAction}) {

    switch(action.type) {
        case MapStateOneAction.INCREASE:
            return {
                primitiveState: state.primitiveState + 1,
                referenceState: [...state.referenceState, state.primitiveState]
            };

        case MapStateOneAction.DECREASE:
            return {
                primitiveState: state.primitiveState - 1,
                referenceState: [...state.referenceState, state.primitiveState]
            };

        default:
            return state;
    }
}
