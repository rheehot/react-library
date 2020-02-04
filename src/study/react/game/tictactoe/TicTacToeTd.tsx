import * as React from "react";
import {GameResult} from "./TicTacToe";

interface AppProp {
    rowIndex: number,
    columnIndex: number,
    currentUserIndex: number,
    mark: Function,
    gameResult: GameResult,
    userSymbol: Function
}

interface AppState {

}

export default class TicTacToeTd extends React.Component<AppProp, AppState> {

    cellHasClicked: boolean = false;

    constructor(props: AppProp) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        if(this.cellHasClicked)
            return;

        if(this.props.gameResult === GameResult.PROCEEDING) {

            this.props.mark([this.props.rowIndex, this.props.columnIndex]);
            this.cellHasClicked = true;
        }

    }

    render() {
        return (
            <td className="tic-tac-toe-td" onClick={this.handleClick}>
                {this.props.userSymbol(this.props.rowIndex, this.props.columnIndex)}
            </td>
        )
    }
}
