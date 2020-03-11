import {tradeMarketRoutes} from "./tradeMarketRoutes";
import {BLACK_DESERT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";
import BlackDesertMain from "../../study/black-desert/BlackDesertMain";

export const routes = [
    {
        path: `${BLACK_DESERT_FIRST_PATH_DIRECTORY_NAME}/main`,
        component: BlackDesertMain,
        meta: {
            name: "검은사막"
        }
    }
].concat(tradeMarketRoutes);
