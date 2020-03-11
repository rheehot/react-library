import {BLACK_DESERT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";
import BlackDesert from "../../study/black-desert/trade-market/NotPearlMarketContainer";

const path = `${BLACK_DESERT_FIRST_PATH_DIRECTORY_NAME}/trade-market`;

export const tradeMarketRoutes = [
    {
        path: `${path}/not-pearl`,
        component: BlackDesert,
        meta: {
            name: "검은사막 계산기"
        }
    }
];
