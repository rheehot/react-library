import HeaderInfo from "./HeaderInfo";
import {mainHeader} from "./MainHeader";
import {hoverableHeaderList} from "../../study/typescript/header/header";
import {tradeRoutes} from "../../route/black-desert/tradeRoutes";

export const blackDesertHeader: Array<Array<HeaderInfo>> = mainHeader.concat([

    hoverableHeaderList("Trade", tradeRoutes),
]);
