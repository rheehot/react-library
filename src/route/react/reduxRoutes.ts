import MapStateApp from "../../study/react/redux/map-state/MapStateApp";
import {REACT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";

const path = `${REACT_FIRST_PATH_DIRECTORY_NAME}/redux`;

export const reduxRoutes = [
    {
        path: `${path}/map-state`,
        component: MapStateApp,
        exact: true,
    }
];
