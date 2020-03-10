import Collapse from "../../study/css/transition/collapse/Collapse";
import Enlargement from "../../study/css/transition/enlargement/Enlargement";
import ImageForwardLayer from "../../study/css/transition/image-forward-layer/ImageForwardLayer";
import {CSS_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";

const path = `${CSS_FIRST_PATH_DIRECTORY_NAME}/transition`;

export const transitionRoutes = [
    {
        path: `${path}/collapse`,
        component: Collapse
    },
    {
        path: `${path}/enlargement`,
        component: Enlargement
    },
    {
        path: `${path}/image-forward-layer`,
        component: ImageForwardLayer
    }
];
