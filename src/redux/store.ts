import {combineReducers, createStore} from "redux";
import {reducer as blackDesert} from "./modules/blackDesert";
import {reducer as counter} from "./modules/counter";

export const PROJECT_NAME = "react-library";

const rootReducer = combineReducers({
    blackDesert,
    counter
});

export type RootState = ReturnType<typeof rootReducer>

//@ts-ignore
export const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootReducer, devTools);
