export enum MapStateTwoAction {
    INCREASE,
    DECREASE
}

interface TwoState {
    primitiveState: number,
    referenceState: Array<number>
}

const initialState:TwoState = {
    primitiveState: 1,
    referenceState: [1, 2, 3]
};

export default function twoReducer(state: TwoState = initialState, action: {type: MapStateTwoAction}): TwoState {

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
