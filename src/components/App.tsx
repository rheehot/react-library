import * as React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import importedComponent from 'react-imported-component';

import Layout from "../layout/Layout";
import Loading from './Loading';

const AsyncDynamicPAge = importedComponent(
		() => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
		{
				LoadingComponent: Loading
		}
);
const AsyncNoMatch = importedComponent(
		() => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
		{
				LoadingComponent: Loading
		}
);

const App = () => {
		return (
				<Router>
						<Switch>
								<Route exact path="/" component={Layout} />
								<Route exact path="/dynamic" component={AsyncDynamicPAge} />
								<Route component={AsyncNoMatch} />
						</Switch>
				</Router>
		);
};

export default App;