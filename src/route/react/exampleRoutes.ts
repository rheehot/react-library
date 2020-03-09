import Counter from "../../study/react/example/counter/Counter";
import RenderProp from "../../study/react/example/render-prop/RenderProp";
import TicTacToeHome from "../../study/react/example/tic-tac-toe/TicTacToeHome";
import BlackDesertContainer from "../../study/react/example/black-desert/BlackDesertContainer";

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
    {
        path: `${path}/black-desert`,
        component: BlackDesertContainer,
        exact: true,
        meta: {
            name: "검은사막 계산기"
        }
    }
];
