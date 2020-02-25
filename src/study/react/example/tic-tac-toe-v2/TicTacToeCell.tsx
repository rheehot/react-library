import * as React from "react";
import CircleSymbol from "../symbol/CircleSymbol";

interface AppProp {
    mark: Function,
    cellValue: number,
    rowIndex: number,
    columnIndex: number
}

interface AppState {

}

export default class TicTacToeCell extends React.Component<AppProp, AppState> {

    shouldComponentUpdate(nextProps: Readonly<AppProp>, nextState: Readonly<AppState>, nextContext: any): boolean {
        return nextProps.cellValue !== this.props.cellValue;
    }

    render() {
        return (
            <td className="tic-tac-toe-td" onClick={() => this.props.mark(this.props.rowIndex, this.props.columnIndex)}>
                <CircleSymbol colorIndex={this.props.cellValue}/>
            </td>
        )
    }
}
