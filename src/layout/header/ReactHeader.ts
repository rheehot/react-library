import HeaderInfo from "./HeaderInfo";
import {mainHeader} from "./MainHeader";
import {gameRoutes} from "../../route/react/gameRoutes";
import {formRoutes} from "../../route/react/formRoutes";
import {renderRoutes} from "../../route/react/renderRoutes";
import {hoverableHeaderList} from "../../study/typescript/header/header";

export const reactHeader: Array<Array<HeaderInfo>> = mainHeader.concat([

    hoverableHeaderList("Game", gameRoutes),
    hoverableHeaderList("Form", formRoutes),
    hoverableHeaderList("Render", renderRoutes)
]);
