import HeaderInfo from "./HeaderInfo";
import {mainHeader} from "./MainHeader";
import {hoverableHeaderList} from "../../study/typescript/header/header";
import {imageRoutes} from "../../route/css/imageRoutes";

export const cssHeader: Array<Array<HeaderInfo>> = mainHeader.concat([

  hoverableHeaderList("Image", imageRoutes),
]);
