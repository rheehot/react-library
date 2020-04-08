import CaptureAndBubble from "../../containers/react/event/CaptureAndBubble";
import {REACT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";

const path = `${REACT_FIRST_PATH_DIRECTORY_NAME}/event`;

export const eventRoutes = [
    {
        path: `${path}/capture-and-bubble`,
        component: CaptureAndBubble,
        exact: true
    },
];
