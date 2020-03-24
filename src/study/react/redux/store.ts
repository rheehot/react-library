import {combineReducers, createStore} from "redux";
import {reducer as one} from "./one";
import two from "./two";
import {devTools} from "../../../store/store";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    one,
    two
});

//@ts-ignore
export const store = createStore(rootReducer, devTools);
