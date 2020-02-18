import * as React from "react";
import {GameResult} from "./TicTacToe";
import CircleSymbol from "../symbol/CircleSymbol";

interface AppProp {
    rowIndex: number,
    columnIndex: number,
    mark: Function,
    gameResult: GameResult,
    cellValue: number
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

    shouldComponentUpdate(nextProps: Readonly<AppProp>, nextState: Readonly<AppState>, nextContext: any): boolean {
        return nextProps.cellValue !== this.props.cellValue;
    }

    render() {
        return (
            <td className="tic-tac-toe-td" onClick={this.handleClick}>
                <CircleSymbol colorIndex={this.props.cellValue}></CircleSymbol>
            </td>
        )
    }
}
