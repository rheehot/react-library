import ReactMain from "../../layout/main/ReactMain";
import {gameRoutes} from "./gameRoutes";

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
].concat(gameRoutes);
