import {cropRoutes} from "./cropRoutes";
import {transitionRoutes} from "./transitionRoutes";
import {squareRoutes} from "./squareRoutes";
import CssMain from "../../layout/main/CssMain";

export const routes = [
    {
        path: "/css/main",
        component: CssMain
    }
].concat(cropRoutes, transitionRoutes, squareRoutes);
