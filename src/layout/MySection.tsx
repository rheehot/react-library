import * as React from "react";
import ReactMain from "../main/ReactMain";
import MyAside from "./MyAside";
import {Route, Switch} from "react-router-dom";
import RatioBox from "../study/markup/square/RatioBox";
import MineSweeper from "../study/react/game/MineSweeper/MineSweeper";

const routes = [
		{
				path: "/square/ratio",
				component: RatioBox
		},
		{
				path: "/game/mine-map",
				component: MineSweeper
		},
		{
				path: "/",
				component: ReactMain
		}
];

export default class MySection extends React.Component {

		render() {
				return (
						<section>
								<MyAside></MyAside>
								<Switch>
										{routes.map(route => {
												return (
														<Route key={`route-${route.path}`} {...route}></Route>
												)
										})}
								</Switch>
						</section>
				);
		}
};