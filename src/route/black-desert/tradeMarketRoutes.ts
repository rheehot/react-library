import {BLACK_DESERT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";
import DiffBenefitDetailContainer from "../../containers/black-desert/trade-market/diff-benefit-detail/DiffBenefitDetailContainer";
import TradeMarket from "../../containers/black-desert/trade-market/TradeMarket";

const path = `${BLACK_DESERT_FIRST_PATH_DIRECTORY_NAME}/trade-market`;

export const tradeMarketRoutes = [
    {
        path: `${path}`,
        component: TradeMarket,
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
