import {combineReducers, createStore} from "redux";
import blackDesert, {BlackDesertState} from "./modules/blackDesert.";

export interface RootState {
    blackDesert: BlackDesertState
}

const rootReducer = combineReducers({
    blackDesert
});

//@ts-ignore
export const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootReducer, devTools);
