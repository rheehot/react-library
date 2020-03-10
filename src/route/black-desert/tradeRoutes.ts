import {BLACK_DESERT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";
import BlackDesert from "../../study/react/example/black-desert/BlackDesertContainer";

const path = `${BLACK_DESERT_FIRST_PATH_DIRECTORY_NAME}/trade`;

export const tradeRoutes = [
    {
        path: `${path}/not-pearl-market`,
        component: BlackDesert,
        meta: {
            name: "검은사막 계산기"
        }
    }
];
