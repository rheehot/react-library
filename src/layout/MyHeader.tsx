import * as React from "react";
import "./layout.scss";
import {Link} from "react-router-dom";

export default class MyHeader extends React.Component {

		render() {
				return (
						<header>
								<nav>
										<ul>
												<li><Link to="/game/mine-map">MineSweeper</Link></li>
												<li><Link to="/square/ratio">RatioBox</Link></li>
										</ul>
								</nav>
						</header>
				)
		}
}