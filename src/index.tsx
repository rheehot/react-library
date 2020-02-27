// https://velog.io/@jungsw586
import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./layout/Layout";
import {Provider} from "react-redux";
import {store} from "./store/store";

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
