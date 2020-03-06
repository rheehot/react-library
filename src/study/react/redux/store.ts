import {combineReducers, createStore} from "redux";
import one from "./one";
import two from "./two";
import {devTools} from "../../../store/store";

export const rootReducer = combineReducers({
    one,
    two
});

//@ts-ignore
export const store = createStore(rootReducer, devTools);
