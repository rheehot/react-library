import {combineReducers, createStore} from "redux";
import {reducer as one} from "./modules/one";
import {reducer as two} from "./modules/two";
import {reducer as blackDesert} from "./modules/blackDesert";

export const PROJECT_NAME = "react-library";

const rootReducer = combineReducers({
    one,
    two,
    blackDesert
});

export type RootState = ReturnType<typeof rootReducer>

//@ts-ignore
export const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootReducer, devTools);
