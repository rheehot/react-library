import * as React from "react";
import MineSweeperTr from "./MineSweeperTr";
import mineMapInit from "./mineMapInit";

interface AppProp {

}

interface AppState {
    mineMap: Array<Array<number>>,
}

export default class MineSweeper extends React.Component<AppProp, AppState> {

    constructor(props: any) {
        super(props);

        this.state = ({
            mineMap: [
                [-1, 0, 0, 0, -1],
                [0, -1, 0, -1, 0],
                [0, 0, -1, 0, 0],
                [0, -1, 0, -1, 0],
                [-1, 0, 0, 0, -1],
            ]
        });

        console.log(mineMapInit(this.state.mineMap));
    }

    render() {

        const mineTrs = Array(this.state.mineMap.length).fill("").map((item, index) => {

            return (
                <MineSweeperTr key={`tr-${index}`} rowIndex={index} tds={this.state.mineMap[index]}/>
            )
        });

        return (
            <div className="component-wrap">
                {mineTrs}
            </div>
        )
    }
}
