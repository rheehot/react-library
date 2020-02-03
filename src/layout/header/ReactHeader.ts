import HeaderInfo from "./HeaderInfo";
import {mainHeader} from "./MainHeader";
import {gameRoutes} from "../../route/react/gameRoutes";

export const reactHeader: Array<Array<HeaderInfo>> = mainHeader.concat([

    [
        new HeaderInfo(gameRoutes[0].path, "Game"),
        ...gameRoutes.map(((gameRoute): HeaderInfo => new HeaderInfo(gameRoute.path, gameRoute.component.name)))
    ],
]);
