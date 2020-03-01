import HeaderInfo from "./HeaderInfo";
import {mainHeader} from "./MainHeader";
import {hoverableHeaderList} from "../../study/typescript/header/header";
import {naverDiffRoutes} from "../../route/css/naverDiffRoutes";
import {transitionRoutes} from "../../route/css/transitionRoutes";

export const cssHeader: Array<Array<HeaderInfo>> = mainHeader.concat([

  hoverableHeaderList("Naver Diff", naverDiffRoutes),
  hoverableHeaderList("Transition", transitionRoutes),
]);
