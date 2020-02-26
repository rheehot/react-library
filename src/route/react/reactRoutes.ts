import ReactMain from "../../study/react/ReactMain";
import {exampleRoutes} from "./exampleRoutes";
import {formRoutes} from "./formRoutes";
import {renderRoutes} from "./renderRoutes";

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
].concat(exampleRoutes, formRoutes, renderRoutes);
