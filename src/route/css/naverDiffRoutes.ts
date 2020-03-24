import NaverDiffMine from "../../containers/css/naver-diff/NaverDiffMine";
import {CSS_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";

const path = `${CSS_FIRST_PATH_DIRECTORY_NAME}/naver-diff`;

export const naverDiffRoutes = [
    {
        path: `${path}/home`,
        component: NaverDiffMine,
        extract: true
    }
];
