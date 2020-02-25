import MineSweeper from "../../study/react/example/mine-sweeper/MineSweeper";
import TicTacToeHome from "../../study/react/example/tic-tac-toe/TicTacToeHome";
import TicTacToeHomeV2 from "../../study/react/example/tic-tac-toe-v2/TicTacToeHomeV2";
import Counter from "../../study/react/example/counter/Counter";
import RenderProp from "../../study/react/example/render-prop/RenderProp";

export const exampleRoutes = [
    {
        path: "/react/example/tic-tac-toe",
        component: TicTacToeHome,
        exact: true
    },
    {
        path: "/react/example/tic-tac-toe-v2",
        component: TicTacToeHomeV2,
        exact: true
    },
    {
        path: "/react/example/mine-sweeper",
        component: MineSweeper,
        exact: true
    },
    {
        path: "/react/example/counter",
        component: Counter,
        exact: true
    },
    {
        path: "/react/example/render-prop",
        component: RenderProp,
        exact: true
    }
];
