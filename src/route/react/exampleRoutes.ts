import MineSweeper from "../../study/react/example/mine-sweeper/MineSweeper";
import TicTacToeHome from "../../study/react/example/tic-tac-toe/TicTacToeHome";
import Counter from "../../study/react/example/counter/Counter";

export const exampleRoutes = [
    {
        path: "/react/game/tic-tac-toe",
        component: TicTacToeHome,
        exact: true
    },
    {
        path: "/react/game/mine-sweeper",
        component: MineSweeper,
        exact: true
    },
    {
        path: "/react/game/counter",
        component: Counter,
        exact: true
    }
];
