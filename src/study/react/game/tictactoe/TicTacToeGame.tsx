import * as React from "react";
import "./TicTacToe.scss";
import TicTacToeTr from "./TicTacToeTr";

interface AppProp {
    sqaureCount: number;
    playerList: [string, string];
}

interface AppState {
    currentUserName: string,
    cell2dList: Array<Array<string>>
}

export default class TicTacToeGame extends React.Component<AppProp, AppState> {

    constructor(props: any) {
        super(props);

        this.state = {
            currentUserName: "",
            cell2dList: [[""]]
        };
    }

    trs() {
        return (
            new Array(this.props.sqaureCount).fill("").map((val, index) => {
                <TicTacToeTr key={`tr-${index}`} cell2dList={this.state.cell2dList} rowIndex={index} playerList={this.props.playerList}></TicTacToeTr>
            })
        );
    }

    render() {
        return (
            <div className="tic-tac-toe-wrap">
                {this.trs()}
            </div>
        )
    }
}
