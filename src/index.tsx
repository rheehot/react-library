// https://velog.io/@jungsw586
import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./layout/Layout";
import numberUtil, {getMinMaxNumberProxy} from "./study/typescript/random/NumberUtil";

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

console.log(getMinMaxNumberProxy(1, 10));