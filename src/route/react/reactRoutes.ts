import ReactMain from "../../containers/react/ReactMain";
import {exampleRoutes} from "./exampleRoutes";
import {formRoutes} from "./formRoutes";
import {renderRoutes} from "./renderRoutes";
import {reduxRoutes} from "./reduxRoutes";

export const routes = [
    {
        path: "/",
        component: ReactMain,
        exact: true
    },
    {
        path: "/react",
        component: ReactMain,
        exact: true
    },
    {
        path: "/react/main",
        component: ReactMain,
        exact: true
    },
].concat(exampleRoutes, formRoutes, renderRoutes, reduxRoutes);
