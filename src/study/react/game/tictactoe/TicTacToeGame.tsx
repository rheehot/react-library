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
    currentUserIndex: number;

    constructor(props: AppProp) {
        super(props);

        this.ticTacToe = new TicTacToe(props.sqaureCount);

        this.state = {
            currentUserName: props.playerList[0],
            cell2dList: this.ticTacToe.cell2dList
        };

        this.mark = this.mark.bind(this);

        this.currentUserIndex = 0;
    }

    mark(selectIndex: [number, number]) {

        this.ticTacToe.mark(selectIndex, this.state.currentUserName);
        this.setState({
            currentUserName: this.props.playerList[(this.currentUserIndex + 1) % 2]
        }, () => {
            this.currentUserIndex = this.props.playerList.indexOf(this.state.currentUserName);
        });
    }

    trs() {
        return (
            new Array(this.props.sqaureCount).fill("").map((val, index) => {
                return <TicTacToeTr key={`tr-${index}`} cell2dList={this.state.cell2dList} rowIndex={index} playerList={this.props.playerList} mark={this.mark}></TicTacToeTr>
            })
        );
    }

    render() {
        return (
            <>
                <h2>현재 사용자 이름 : {this.state.currentUserName}</h2>
                <table className="tic-tac-toe-wrap">
                    <tbody>
                        {this.trs()}
                    </tbody>
                </table>
            </>
        )
    }
}
