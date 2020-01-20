import * as React from "react";
import {Icon} from "semantic-ui-react";
import Layout from "../layout/Layout";

const NoMatch = () => {
		return (
				<Layout>
						<Icon name="minus circle" size="big" />
						<strong>Page not found!</strong>
				</Layout>
		);
};

export default NoMatch;