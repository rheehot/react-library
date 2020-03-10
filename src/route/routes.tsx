import * as React from "react";
import {Route, Switch} from "react-router-dom";
import {routes as reactRoutes} from "./react/reactRoutes";
import {routes as cssRoutes} from "./css/cssRoutes";
import {routes as blackDesertRoutes} from "./black-desert/blackDesertRoutes";

const routes = [].concat(reactRoutes, cssRoutes, blackDesertRoutes);

export default function Routes() {

    return (
        <Switch>
            {routes.map(route => <Route key={`route-${route.path}`} {...route}/>)}
        </Switch>
    );
};
