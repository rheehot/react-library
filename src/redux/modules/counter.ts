import {PROJECT_NAME} from "../store";
import {Action, createAction} from "redux-actions";
import {TwoDataType} from "../../interfaces/TwoDataType";

//Actions
const INCREASE = `${PROJECT_NAME}/counter/INCREASE`;
const DECREASE = `${PROJECT_NAME}/counter/DECREASE`;

//Action Creators
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//state and reducer
export interface CounterState extends TwoDataType {
}

const initialState: CounterState = {
    primitive: 0,
    reference: [0]
};

export function reducer(state = initialState, action: Action<undefined>) {

    console.log(initialState);
    debugger;

    switch (action.type) {
        default:
            return initialState;
    }
}
