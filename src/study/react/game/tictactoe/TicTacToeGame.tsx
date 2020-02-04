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
        this.userSymbol = this.userSymbol.bind(this);
        this.userNameSymbol = this.userNameSymbol.bind(this);
        this.currentSymbol = this.currentSymbol.bind(this);
    }

    userSymbol(rowIndex: number, columnIndex: number) {

        const userName = this.ticTacToe.cell2dList[rowIndex][columnIndex];
        return this.userNameSymbol(userName);
    }

    userNameSymbol(userName: string) {

        if(userName === this.props.playerList[0])
            return (
              <div className={"circle red"}>
              </div>
            );

        else if(userName === this.props.playerList[1])
            return (
              <div className={"circle blue"}>
              </div>
            );

        else
            return null;
    }

    currentSymbol() {

        if(this.ticTacToe.gameResult === GameResult.PROCEEDING)
            return this.userNameSymbol(this.props.playerList[this.state.currentUserIndex]);
    }

    mark(selectIndex: [number, number]) {

        console.log("mark call");

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
                    message: `결과 : ${winnerName}님이 우승하셨습니다.`,
                    gameResult: this.ticTacToe.gameResult
                });
                break;

            case GameResult.TIE:

                this.setState({
                    message: `결과 : 무승부 입니다.`,
                    gameResult: this.ticTacToe.gameResult
                });
                break;
        }
    }

    trs() {
        return (
            new Array(this.props.sqaureCount).fill("").map((val, index) => {
                return <TicTacToeTr key={`tr-${index}`} rowIndex={index} mark={this.mark} userSymbol={this.userSymbol} {...this.state}></TicTacToeTr>
            })
        );
    }

    render() {

        console.log("render called");

        return (
            <>
                <div className="tic-tac-toe-top">
                    <h2>{this.state.message}</h2>
                    {this.currentSymbol()}
                </div>
                <table className="tic-tac-toe-table">
                    <tbody>
                        {this.trs()}
                    </tbody>
                </table>
            </>
        )
    }
}
