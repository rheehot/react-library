import * as React from "react";
import MyAside from "./MyAside";
import Routes from "../route/routes";

export default class MySection extends React.Component {

		render() {
				return (
						<section>
								<MyAside></MyAside>
								<Routes/>
						</section>
				);
		}
};
