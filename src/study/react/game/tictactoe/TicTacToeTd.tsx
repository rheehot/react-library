import * as React from "react";

interface AppProp {
    rowIndex: number,
    columnIndex: number,
    cell2dList: Array<Array<string>>,
    playerList: [string, string]
}

interface AppState {

}

export default class TicTacToeTd extends React.Component<AppProp, AppState> {

    render() {
        return (
            <td className="tic-tac-toe-td">
            </td>
        )
    }
}
