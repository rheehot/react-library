import {Action, BaseAction, handleActions} from "redux-actions";

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

    [MapStateOneAction.INCREASE]: (state: OneState, action: Action<number>) => ({
        primitiveState: state.primitiveState + action.payload,
        referenceState: [...state.referenceState, state.primitiveState]
    }),

    [MapStateOneAction.DECREASE]: (state: OneState, action: BaseAction) => ({
        primitiveState: state.primitiveState - 1,
        referenceState: [...state.referenceState, state.primitiveState]
    })

}, initialState);
