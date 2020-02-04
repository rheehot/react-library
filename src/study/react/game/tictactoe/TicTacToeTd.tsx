import * as React from "react";

interface AppProp {
    rowIndex: number,
    columnIndex: number,
    cell2dList: Array<Array<string>>,
    playerList: [string, string],
    currentUserIndex: number,
    mark: Function
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
