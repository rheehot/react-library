import {REACT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";
import CounterApp from "../../containers/react/redux/counter/CounterApp";

const path = `${REACT_FIRST_PATH_DIRECTORY_NAME}/redux`;

export const reduxRoutes = [
    {
        path: `${path}/counter`,
        component: CounterApp,
        exact: true,
        meta: {
            name: "Counter"
        }
    }
];
