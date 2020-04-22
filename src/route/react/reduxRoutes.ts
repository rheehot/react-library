import {REACT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";
import CounterContainer from "../../containers/react/redux/counter/CounterContainer";

const path = `${REACT_FIRST_PATH_DIRECTORY_NAME}/redux`;

export const reduxRoutes = [
    {
        path: `${path}/counter`,
        component: CounterContainer,
        exact: true,
        meta: {
            name: "Counter"
        }
    }
];
