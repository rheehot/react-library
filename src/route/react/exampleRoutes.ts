import Counter from "../../study/react/example/counter/Counter";
import RenderProp from "../../study/react/example/render-prop/RenderProp";
import TicTacToeHome from "../../study/react/example/tic-tac-toe/TicTacToeHome";

const path = `/react/example`;

export const exampleRoutes = [
    {
        path: `${path}/tic-tac-toe`,
        component: TicTacToeHome,
        exact: true
    },
    {
        path: `${path}/counter`,
        component: Counter,
        exact: true
    },
    {
        path: `${path}/render-prop`,
        component: RenderProp,
        exact: true
    },
];
