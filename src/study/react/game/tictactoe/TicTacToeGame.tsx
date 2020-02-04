import * as React from "react";
import "./TicTacToe.scss";
import TicTacToeTr from "./TicTacToeTr";
import TicTacToe, {GameResult} from "./TicTacToe";

interface AppProp {
    sqaureCount: number;
    playerList: [string, string];
}

interface AppState {
    cell2dList: Array<Array<string>>,
    currentUserIndex: number,
    message: string,
    gameResult: GameResult
}

export default class TicTacToeGame extends React.Component<AppProp, AppState> {

    readonly ticTacToe:TicTacToe;

    constructor(props: AppProp) {
        super(props);

        this.ticTacToe = new TicTacToe(props.sqaureCount);

        this.state = {
            cell2dList: this.ticTacToe.cell2dList,
            currentUserIndex: 0,
            message: `현재 사용자 이름 : ${this.props.playerList[0]}`,
            gameResult: this.ticTacToe.gameResult
        };

        this.mark = this.mark.bind(this);
    }

    mark(selectIndex: [number, number]) {

        const changeUserIndex = (this.state.currentUserIndex + 1) % 2;
        const markSuccess = this.ticTacToe.mark(selectIndex, this.props.playerList[this.state.currentUserIndex]);

        if(markSuccess) {

            this.setState({
                currentUserIndex: changeUserIndex,
                message: `현재 사용자 이름 : ${this.props.playerList[changeUserIndex]}`
            });
        }

        switch(this.ticTacToe.gameResult) {
            case GameResult.WHO_WIN:
                const winnerName = this.ticTacToe.winner;

                this.setState({
                    message: `${winnerName}님이 우승하셨습니다.`,
                    gameResult: this.ticTacToe.gameResult
                });
                this.forceUpdate();
                break;

            case GameResult.TIE:

                this.setState({
                    message: `무승부 입니다.`,
                    gameResult: this.ticTacToe.gameResult
                });
                this.forceUpdate();
                break;
        }
    }

    trs() {
        return (
            new Array(this.props.sqaureCount).fill("").map((val, index) => {
                return <TicTacToeTr key={`tr-${index}`} rowIndex={index} mark={this.mark} playerList={this.props.playerList} {...this.state}></TicTacToeTr>
            })
        );
    }

    render() {

        console.log("render called");

        return (
            <>
                <h2>{this.state.message}</h2>
                <table className="tic-tac-toe-wrap">
                    <tbody>
                        {this.trs()}
                    </tbody>
                </table>
            </>
        )
    }
}
