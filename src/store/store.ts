import {combineReducers, createStore} from "redux";
import counter from "./modules/counter";

const rootReducer = combineReducers({
    counter
});

//@ts-ignore
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootReducer, devTools);
