import {imageRoutes} from "./imageRoutes";
import {transitionRoutes} from "./transitionRoutes";
import {squareRoutes} from "./squareRoutes";
import {naverDiffRoutes} from "./naverDiffRoutes";
import CssMain from "../../study/css/CssMain";

export const routes = [
    {
        path: "/css/main",
        component: CssMain
    }
].concat(imageRoutes, transitionRoutes, squareRoutes, naverDiffRoutes);
