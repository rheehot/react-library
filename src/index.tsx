// https://velog.io/@jungsw586
import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./layout/Layout";
import {createStore} from "redux";
import rootReducer from "./store/modules";
import {Provider} from "react-redux";

//@ts-ignore
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootReducer, devTools);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/public">
                </Route>
                <Layout/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
