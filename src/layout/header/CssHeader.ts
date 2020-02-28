import HeaderInfo from "./HeaderInfo";
import {mainHeader} from "./MainHeader";
import {hoverableHeaderList} from "../../study/typescript/header/header";
import {imageRoutes} from "../../route/css/imageRoutes";
import {naverDiffRoutes} from "../../route/css/naverDiffRoutes";

export const cssHeader: Array<Array<HeaderInfo>> = mainHeader.concat([

  hoverableHeaderList("Image", imageRoutes),
  hoverableHeaderList("Naver Diff", naverDiffRoutes),
]);
