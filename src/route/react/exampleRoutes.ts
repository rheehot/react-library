import Counter from "../../study/react/example/counter/Counter";
import RenderProp from "../../study/react/example/render-prop/RenderProp";
import TicTacToeHome from "../../study/react/example/tic-tac-toe/TicTacToeHome";
import {REACT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";

const path = `${REACT_FIRST_PATH_DIRECTORY_NAME}/example`;

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
