import * as React from "react";
import MineSweeperTr from "./MineSweeperTr";
import MineSweeperTd from "./MineSweeperTd";

interface AppProp {

}

interface AppState {
    mineMap: Array<Array<number>>
}

export default class MineSweeper extends React.Component<AppProp, AppState> {

    constructor(props: any) {
        super(props);

        this.state = ({
            mineMap: [
                [0, 0, 0, 0, 1],
                [0, 1, 0, 1, 0],
                [0, 0, 1, 0, 0],
                [0, 1, 0, 1, 0],
                [1, 0, 0, 0, 1],
            ]
        });
    }

    render() {

        const mineTds = Array(this.state.mineMap[0].length).fill("").map((item, index) => {
            return (
                <MineSweeperTd key={`td-${index}`}/>
            )
        });

        const mineTrs = Array(this.state.mineMap.length).fill("").map((item, index) => {

            return (
                <MineSweeperTr key={`tr-${index}`}>
                    {mineTds}
                </MineSweeperTr>
            )
        });

        console.log(mineTds);

        return (
            <div className="component-wrap">
                {mineTrs}
            </div>
        )
    }
}
