import ReactMain from "../../study/react/ReactMain";
import {gameRoutes} from "./gameRoutes";
import {formRoutes} from "./formRoutes";
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
].concat(gameRoutes, formRoutes, renderRoutes);
