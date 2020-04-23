import {createAction, handleActions} from "redux-actions";
import {NumberType} from "../../interfaces/NumberType";

//Actions
export const INCREASE = "react-library/counter/INCREASE";
export const DECREASE = "react-library/counter/DECREASE";
export const INCREASE_ASYNC = "react-library/counter/INCREASE_ASYNC";

//Action Creators
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASYNC);

//state and reducer
export interface CounterState extends NumberType {
}

const initialState: CounterState = {
    primitive: 0,
};

export const reducer = handleActions<CounterState>({

    [INCREASE]: state => ({
        primitive: state.primitive + 1,
    }),

    [DECREASE]: state => ({
        primitive: state.primitive - 1,
    })
}, initialState);
