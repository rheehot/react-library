import * as React from "react";
import CircleSymbol from "../symbol/CircleSymbol";
import TicTacToeTd from "../tic-tac-toe/TicTacToeTd";
import {GameResult, getGameResult, getWiner, mark, playerIndex} from "./TicTacToe";
import {getSquareArray} from "../../../typescript/random/squareArrayUtil";
import TicTacToeCell from "./TicTacToeCell";

interface AppProp {
    squareCount: number,
    playerList: Array<string>
}

interface AppState {
    cellGrid: Array<Array<string>>,
    message: string,
    currentPlayerIndex: number
}

export default class TicTacToeGame extends React.PureComponent<AppProp, AppState> {

    constructor(props: AppProp) {
        super(props);
        this.state = {
            cellGrid: getSquareArray(this.props.squareCount),
            message: "",
            currentPlayerIndex: -1
        };
    }

    mark = (rowIndex: number, columnIndex: number) => {

        const currentPlayer = this.props.playerList[this.state.currentPlayerIndex];
        const nextCellGrid = mark(rowIndex, columnIndex, currentPlayer, this.state.cellGrid);

        console.log(nextCellGrid);

        if(!nextCellGrid) {
            return;
        }

        const gameResult = getGameResult(nextCellGrid);

        switch (gameResult) {
            case GameResult.TIE:
                this.setState({
                    message: "무승부 입니다.",
                    currentPlayerIndex: -1
                });
                break;

            case GameResult.WHO_WIN:
                let winner = getWiner(nextCellGrid);
                this.setState({
                    message: `${this.props.playerList[this.state.currentPlayerIndex]}님이 승리하셨습니다.`,
                    currentPlayerIndex: -1
                });
                break;

            case GameResult.PROCEEDING:
                this.setState(prevState => {
                    return {
                        currentPlayerIndex: (this.state.currentPlayerIndex + 1) % this.props.playerList.length
                    }
                });
                break;
        }

        this.setState({
            cellGrid: nextCellGrid
        });
    };

    tds = (rowIndex: number) => {

        return (
            new Array(this.props.squareCount).fill(undefined).map((val, columnIndex) => {

                return (
                    <TicTacToeCell key={`td-${rowIndex}-${columnIndex}`} rowIndex={rowIndex} columnIndex={columnIndex}
                                 mark={this.mark}
                                 cellValue={playerIndex(rowIndex, columnIndex, this.props.playerList, this.state.cellGrid)}></TicTacToeCell>
                )
            })
        );

    };

    trs = () => {
        return (
            new Array(this.props.squareCount).fill(undefined).map((val, rowIndex) => {

                return (
                    <tr key={`tr-${rowIndex}`}>
                        {this.tds(rowIndex)}
                    </tr>
                )
            })
        );
    };

    render = () => {
        return (
            <>
                <div className="tic-tac-toe-top">
                    <h2>{this.state.message}</h2>
                    <CircleSymbol colorIndex={this.state.currentPlayerIndex}/>
                </div>
                <table className="tic-tac-toe-table">
                    <tbody>
                    {this.trs()}
                    </tbody>
                </table>
            </>
        )
    };
};
