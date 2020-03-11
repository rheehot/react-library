import {BLACK_DESERT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";
import BlackDesert from "../../study/black-desert/trade-market/TradeMarketContainer";

const path = `${BLACK_DESERT_FIRST_PATH_DIRECTORY_NAME}/trade-market`;

export const tradeMarketRoutes = [
    {
        path: `${path}`,
        component: BlackDesert,
        meta: {
            name: "거래소 수익 계산기"
        },
    }
];
