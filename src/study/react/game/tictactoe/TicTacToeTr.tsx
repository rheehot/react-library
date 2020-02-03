import * as React from "react";
import TicTacToeTd from "./TicTacToeTd";

interface AppProp {
    rowIndex: number,
    cell2dList: Array<Array<string>>,
    playerList: [string, string];
}

interface AppState {

}

export default class TicTacToeTr extends React.Component<AppProp, AppState> {

    tds() {
        // return (
            // this.props.cell2dList[this.props.rowIndex]
            // <TicTacToeTd></TicTacToeTd>
        // )
    }

    render() {
        return (
            <div className="component-wrap">
                {/*{this.tds()}*/}
            </div>
        )
    }
}
