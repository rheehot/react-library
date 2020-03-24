import {combineReducers, createStore} from "redux";
import blackDesert from "./modules/blackDesert.";
import {reducer as one} from "./modules/one";
import {reducer as two} from "./modules/two";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    blackDesert,
    one,
    two
});

//@ts-ignore
export const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootReducer, devTools);
