import {handleActions} from "redux-actions";

export enum MapStateOneAction {
    INCREASE = "map-state-one/INCREASE",
    DECREASE = "map-state-one/DECREASE",
}

interface OneState {
    primitiveState: number,
    referenceState: Array<number>
}

const initialState:OneState = {
    primitiveState: 1,
    referenceState: [1, 2, 3]
};

export const reducer = handleActions({

    [MapStateOneAction.INCREASE]: (state, action) => ({
        primitiveState: state.primitiveState + 1,
        referenceState: [...state.referenceState, state.primitiveState]
    }),

    [MapStateOneAction.DECREASE]: (state, action) => ({
        primitiveState: state.primitiveState - 1,
        referenceState: [...state.referenceState, state.primitiveState]
    })

}, initialState);

export default function oneReducer(state: OneState = initialState, action: {type: MapStateOneAction}): OneState {

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
