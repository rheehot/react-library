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

        const mineTds = Array(this.state.mineMap[0].length).map(item => {
            return (
                <MineSweeperTd/>
            )
        });

        const mineTrs = Array(this.state.mineMap.length).map(item => {

            return (
                <MineSweeperTr>
                    {mineTds}
                </MineSweeperTr>
            )
        });

        console.log(mineTrs);

        return (
            <div className="component-wrap">
                {mineTrs}
            </div>
        )
    }
}
