import ReactMain from "../../layout/main/ReactMain";
import {gameRoutes} from "./gameRoutes";
import {exampleRoutes} from "./exampleRoutes";
import {renderRoutes} from "./renderRoutes";

export const routes = [
    {
        path: "/",
        component: ReactMain,
        exact: true
    },
    {
        path: "/react/main",
        component: ReactMain,
        exact: true
    },
].concat(gameRoutes, exampleRoutes, renderRoutes);
