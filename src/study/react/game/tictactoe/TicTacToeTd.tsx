import * as React from "react";
import {GameResult} from "./TicTacToe";

interface AppProp {
    rowIndex: number,
    columnIndex: number,
    cell2dList: Array<Array<string>>,
    playerList: [string, string],
    currentUserIndex: number,
    mark: Function,
    gameResult: GameResult
}

interface AppState {

}

export default class TicTacToeTd extends React.Component<AppProp, AppState> {

    constructor(props: AppProp) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.showSymbol = this.showSymbol.bind(this);
    }

    showSymbol() {
        const cellValue = this.props.cell2dList[this.props.rowIndex][this.props.columnIndex];

        if(! cellValue)
            return;

        if(cellValue === this.props.playerList[0])
            return "O";

        else
            return "X";
    }

    handleClick() {

        console.log(this.props.gameResult);

        if(this.props.gameResult === GameResult.PROCEEDING)
            this.props.mark([this.props.rowIndex, this.props.columnIndex]);
    }

    render() {
        return (
            <td className="tic-tac-toe-td" onClick={this.handleClick}>
                {this.showSymbol()}
            </td>
        )
    }
}
