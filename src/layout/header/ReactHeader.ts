import HeaderInfo from "./HeaderInfo";
import {mainHeader} from "./mainHeader";

export const reactHeader: Array<Array<HeaderInfo>> = mainHeader.concat([
    [
        new HeaderInfo("/react/game/multiplication-table", "Game"),
        new HeaderInfo("/react/game/multiplication-table", "Multiplication-Table"),
        new HeaderInfo("/react/game/mine-sweeper", "Mine-Sweeper"),
        new HeaderInfo("/react/game/ending-game", "Ending-Word"),
    ],
]);
