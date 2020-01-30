import {routes as cropRoutes} from "./image/cropRoutes";
import {routes as transitionRoutes} from "./transition/transitionRoutes";
import {routes as squareRoutes} from "./square/squareRoutes";

export const routes = [
].concat(cropRoutes, transitionRoutes, squareRoutes);
