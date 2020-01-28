import * as React from "react";
import {Route, Switch} from "react-router-dom";
import {routes as reactRoutes} from "./react/reactRoutes";
import {routes as cssRoutes} from "./css/cssRoutes";

interface AppProp {

}

interface AppState {

}

const routes = [].concat(reactRoutes, cssRoutes);

export default class Routes extends React.Component<AppProp, AppState> {

    render() {
        return (
            <Switch>
                {routes.map(route => {
                    return (
                        <Route key={`route-${route.path}`} {...route}/>
                    )
                })}
            </Switch>
        )
    }
}
