import {Action, createAction, handleActions} from "redux-actions";
import {PROJECT_NAME} from "../store";

//Actions
const ONE_INCREASE = `/${PROJECT_NAME}/one/ONE_INCREASE`;
const ONE_DECREASE = `/${PROJECT_NAME}/one/ONE_DECREASE`;

//Action Creators
export const oneIncrease = createAction(ONE_INCREASE);
export const oneDecrease = createAction(ONE_DECREASE);

//state and reducer
interface OneState {
    primitiveState: number,
    referenceState: Array<number>
}

const initialState: OneState = {
    primitiveState: 1,
    referenceState: [1, 2, 3]
};

export const reducer = handleActions({

    [ONE_INCREASE]: (state: OneState, action: Action<number>) => ({
        primitiveState: state.primitiveState + action.payload,
        referenceState: [...state.referenceState, state.primitiveState]
    }),

    [ONE_DECREASE]: (state: OneState, action: Action<number>) => ({
        primitiveState: state.primitiveState - action.payload,
        referenceState: [...state.referenceState, state.primitiveState]
    }),

}, initialState);
