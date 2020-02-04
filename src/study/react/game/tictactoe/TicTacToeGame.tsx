import * as React from "react";
import "./TicTacToe.scss";
import TicTacToeTr from "./TicTacToeTr";
import TicTacToe from "./TicTacToe";

interface AppProp {
    sqaureCount: number;
    playerList: [string, string];
}

interface AppState {
    currentUserName: string,
    cell2dList: Array<Array<string>>
}

export default class TicTacToeGame extends React.Component<AppProp, AppState> {

    readonly ticTacToe:TicTacToe;

    constructor(props: AppProp) {
        super(props);

        this.ticTacToe = new TicTacToe(props.sqaureCount);

        this.state = {
            currentUserName: props.playerList[0],
            cell2dList: this.ticTacToe.cell2dList
        };
    }

    trs() {
        return (
            new Array(this.props.sqaureCount).fill("").map((val, index) => {
                return <TicTacToeTr key={`tr-${index}`} cell2dList={this.state.cell2dList} rowIndex={index} playerList={this.props.playerList}></TicTacToeTr>
            })
        );
    }

    render() {
        return (
            <table className="tic-tac-toe-wrap">
                <tbody>
                    {this.trs()}
                </tbody>
            </table>
        )
    }
}
