// https://velog.io/@jungsw586
import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./layout/Layout";

ReactDOM.render(
		<BrowserRouter>
				<Switch>
						<Route path="/public">
						</Route>
						<Layout/>
				</Switch>
		</BrowserRouter>,
    document.getElementById("root")
);
