import {combineReducers, createStore} from "redux";
import one, {OneState} from "./one";
import two, {TwoState} from "./two";
import {devTools} from "../../../store/store";

export interface RootState {
    one: OneState,
    two: TwoState
}

const rootReducer = combineReducers({
    one,
    two
});

//@ts-ignore
export const store = createStore(rootReducer, devTools);
