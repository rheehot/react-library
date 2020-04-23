import {createAction, handleActions} from "redux-actions";
import {NumberType} from "../../interfaces/NumberType";

//Actions
const TWICE_INCREASE = "react-library/twiceCounter/TWICE_INCREASE";
const TWICE_DECREASE = "react-library/twiceCounter/TWICE_DECREASE";
const NOT_CHANGE = "react-library/twiceCounter/NOT_CHANGE";

//Action Creators
export const twiceIncrease = createAction(TWICE_INCREASE);
export const twiceDecrease = createAction(TWICE_DECREASE);
export const notChange = createAction(NOT_CHANGE);

//state and reducer
export interface TwiceCounterState extends NumberType {
}

const initialState: TwiceCounterState = {
    primitive: 0,
};

export const reducer = handleActions<TwiceCounterState>({

    [TWICE_INCREASE]: state => ({
        primitive: state.primitive + 2,
    })
    ,
    [TWICE_DECREASE]: state => ({
        primitive: state.primitive - 2,
    }),

    [NOT_CHANGE]: state => state

}, initialState);
