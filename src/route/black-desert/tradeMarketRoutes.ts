import {BLACK_DESERT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";
import TradeMarketContainer from "../../study/black-desert/trade-market/TradeMarketContainer";
import DiffBenefitDetailContainer from "../../study/black-desert/trade-market/diff-benefit-detail/DiffBenefitDetailContainer";

const path = `${BLACK_DESERT_FIRST_PATH_DIRECTORY_NAME}/trade-market`;

export const tradeMarketRoutes = [
    {
        path: `${path}`,
        component: TradeMarketContainer,
        exact: true,
        meta: {
            name: "거래소 수익 계산기"
        },
    },
    {
        path: `${path}/diff-benefit-detail`,
        component: DiffBenefitDetailContainer,
        exact: true,
        meta: {
            hoverable: false
        }
    }
];
