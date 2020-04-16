import {Action, createAction, handleActions} from "redux-actions";
import {PROJECT_NAME} from "../store";

//Actions
const TWO_INCREASE = `/${PROJECT_NAME}/two/TWO_INCREASE`;
const TWO_DECREASE = `/${PROJECT_NAME}/two/TWO_DECREASE`;

//Action Creators
export const twoIncrease = createAction(TWO_INCREASE);
export const twoDecrease = createAction(TWO_DECREASE);

//state and reducer
interface TwoState {
    primitiveState: number,
    referenceState: Array<number>
}

const initialState: TwoState = {
    primitiveState: 1,
    referenceState: [1, 2, 3]
};

export const reducer = handleActions({

    [TWO_INCREASE]: (state: TwoState, action: Action<number>) => ({
        primitiveState: state.primitiveState + action.payload,
        referenceState: [...state.referenceState, state.primitiveState]
    }),

    [TWO_DECREASE]: (state: TwoState, action: Action<number>) => ({
        primitiveState: state.primitiveState - action.payload,
        referenceState: [...state.referenceState, state.primitiveState]
    }),

}, initialState);
