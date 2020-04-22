import {createAction, handleActions} from "redux-actions";
import {TwoDataType} from "../../interfaces/TwoDataType";

//Actions
const INCREASE = "react-library/counter/INCREASE";
const DECREASE = "react-library/counter/DECREASE";

//Action Creators
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//state and reducer
export interface CounterState extends TwoDataType{
}

const initialState: CounterState = {
    primitive: 0,
    reference: [0]
};

export const reducer = handleActions({

    [INCREASE]: (state: CounterState) => ({
        primitive: state.primitive + 1,
        reference: [...state.reference, state.primitive + 1]
    }),

    [DECREASE]: (state: CounterState) => ({
        primitive: state.primitive - 1,
        reference: [...state.reference, state.primitive - 1]
    }),

}, initialState);
