import HeaderInfo from "./HeaderInfo";
import {mainHeader} from "./MainHeader";
import {gameRoutes} from "../../route/react/gameRoutes";
import {exampleRoutes} from "../../route/react/exampleRoutes";
import {renderRoutes} from "../../route/react/renderRoutes";
import {hoverableHeaderList} from "../../study/typescript/header/header";

export const reactHeader: Array<Array<HeaderInfo>> = mainHeader.concat([

    hoverableHeaderList("Game", gameRoutes),
    hoverableHeaderList("Example", exampleRoutes),
    hoverableHeaderList("Render", renderRoutes)
]);
