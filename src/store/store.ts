import {combineReducers, createStore} from "redux";
import blackDesertReducer from "./modules/blackDesert.";

/**
 * 바로 여기가 getState()했을 때 나오는 property name이 됨.
 * 근데 신기한건 import받은건 state를 반환하는 "함수"인데
 * state에 담기는건 state임.
 */
const rootReducer = combineReducers({
    blackDesertReducer
});

//@ts-ignore
export const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootReducer, devTools);
