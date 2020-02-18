import MineSweeper from "../../study/react/game/mine-sweeper/MineSweeper";
import TicTacToeHome from "../../study/react/game/tic-tac-toe/TicTacToeHome";

export const gameRoutes = [
    {
        path: "/react/game/tic-tac-toe",
        component: TicTacToeHome,
        exact: true
    },
    {
        path: "/react/game/mine-sweeper",
        component: MineSweeper,
        exact: true
    }
];
