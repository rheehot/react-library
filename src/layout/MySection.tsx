import * as React from "react";
import ReactMain from "../main/ReactMain";
import MyAside from "./MyAside";

export default class MySection extends React.Component {

		render() {
				return (
						<section>
								<MyAside></MyAside>
								<ReactMain></ReactMain>
						</section>
				)
		}
};