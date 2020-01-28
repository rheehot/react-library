import * as React from "react";
import ReactMain from "../../main/ReactMain";
import MineSweeper from "../../study/react/game/MineSweeper/MineSweeper";

export const routes: Array<{ path: string, component: React.ComponentType<any>, exact: boolean }> = [
    {
        path: "/",
        component: ReactMain,
        exact: true
    },
    {
        path: "/game/mine-map",
        component: MineSweeper,
        exact: true
    },
];
