import HeaderInfo from "./HeaderInfo";
import {mainHeader} from "./MainHeader";
import {gameRoutes} from "../../route/react/gameRoutes";
import {exampleRoutes} from "../../route/react/exampleRoutes";
import {renderRoutes} from "../../route/react/renderRoutes";

export const reactHeader: Array<Array<HeaderInfo>> = mainHeader.concat([

    [
        new HeaderInfo(gameRoutes[0].path, "Game"),
        ...gameRoutes.map(((gameRoute): HeaderInfo => new HeaderInfo(gameRoute.path, gameRoute.component.name)))
    ],
    [
        new HeaderInfo(exampleRoutes[0].path, "Example"),
        ...exampleRoutes.map(((exampleRoute): HeaderInfo => new HeaderInfo(exampleRoute.path, exampleRoute.meta.name)))
    ],
    [
        new HeaderInfo(renderRoutes[0].path, "Render"),
        ...renderRoutes.map((renderRoute): HeaderInfo => new HeaderInfo(renderRoute.path, renderRoute.component.name))
    ]
]);
