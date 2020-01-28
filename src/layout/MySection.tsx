import * as React from "react";
import ReactMain from "../main/ReactMain";
import MyAside from "./MyAside";
import {Route, Switch} from "react-router-dom";
import RatioBox from "../study/markup/square/RatioBox";
import MineSweeper from "../study/react/game/MineSweeper/MineSweeper";

export default class MySection extends React.Component {

		render() {
				return (
						<section>
								<MyAside></MyAside>
								<Switch>
										<Route path="/square/ratio">
												<RatioBox />
										</Route>
										<Route path="/game/mine-map">
												<MineSweeper/>
										</Route>
										<Route path="/">
												<ReactMain />
										</Route>
								</Switch>
						</section>
				)
		}
};