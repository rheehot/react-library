import {combineReducers} from "redux";
import counter from "./counter";

/**
 * 음음음 Vue도 이거있었는데 Reducer합치는거였구나.
 * Reducer = state를 바꾸는 함수.
 */
export default combineReducers({
    counter
});
