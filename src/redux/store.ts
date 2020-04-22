import {combineReducers, createStore, applyMiddleware} from "redux";
import {reducer as blackDesert} from "./modules/blackDesert";
import {reducer as counter} from "./modules/counter";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/sagas";

const rootReducer = combineReducers({
    blackDesert,
    counter
});

export type RootState = ReturnType<typeof rootReducer>

//@ts-ignore
export const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, devTools, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

