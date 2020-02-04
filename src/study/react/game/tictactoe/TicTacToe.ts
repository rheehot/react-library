import {isOddNumber} from "../../../typescript/random/NumberUtil";
import {backwordDiagonalArray, forwardDiagonalArray, verticalArray} from "../../../typescript/random/squareArrayUtil";

export default class TicTacToe {
    private readonly squareCount: number;
    private readonly _cell2dList: Array<Array<string>>;
    private winner: string | null = null;

    constructor(squareCount: number) {
        this.squareCount = squareCount;
        this._cell2dList = new Array(squareCount).fill("").map((): Array<string> => new Array(squareCount).fill(""));
    }

    get cell2dList(): Array<Array<string>> {
        return this._cell2dList;
    }

    mark(selectIndex: [number, number], selectUserName: string): void {

        if(this.winner === null && this.cellIsEmpty(selectIndex)) {
            this.winnerCheck(selectIndex, selectUserName);
        }
    }

    getWinner(): string | null {
        return this.winner;
    }

    private needDiagonalSearch(selectIndex: [number, number]): boolean {
        return isOddNumber(this.squareCount) && (selectIndex[0] === selectIndex[1]) && (selectIndex[0] === this.squareCount / 2 + 1);
    }

    private cellIsEmpty(cellIndex: [number, number]):boolean {
        return this._cell2dList[cellIndex[0]][cellIndex[1]] === "";
    }

    private winnerCheck(selectIndex: [number, number], selectUserName: string): void {

        let sameCount = 0;

        if(this.needDiagonalSearch(selectIndex)) {

            sameCount = forwardDiagonalArray(this._cell2dList).filter((userName: string) => userName === selectUserName).length;

            if(sameCount === this.squareCount) {
                this.winner = selectUserName;
                return;
            }

            sameCount = backwordDiagonalArray(this._cell2dList).filter((userName: string) => userName === selectUserName).length;

            if(sameCount === this.squareCount) {
                this.winner = selectUserName;
                return;
            }
        }

        sameCount = verticalArray(this._cell2dList, selectIndex[1]).filter((userName: string) => userName === selectUserName).length;

        if(sameCount === this.squareCount) {
            this.winner = selectUserName;
            return;
        }

        sameCount = this._cell2dList[selectIndex[0]].filter((userName: string) => userName === selectUserName).length;

        if(sameCount === this.squareCount) {
            this.winner = selectUserName;
            return;
        }
    }
}
