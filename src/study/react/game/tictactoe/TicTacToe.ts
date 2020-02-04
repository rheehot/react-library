import {backwordDiagonalArray, forwardDiagonalArray, verticalArray} from "../../../typescript/random/squareArrayUtil";

export default class TicTacToe {
    private readonly _squareCount: number;
    private readonly _cell2dList: Array<Array<string>>;
    private _winner: string | null = null;
    private _gameResult: GameResult;
    private _markCount: number;

    constructor(squareCount: number) {
        this._squareCount = squareCount;
        this._cell2dList = new Array(squareCount).fill("").map((): Array<string> => new Array(squareCount).fill(""));
        this._gameResult = GameResult.PROCEEDING;
        this._markCount = 0;
    }

    get cell2dList(): Array<Array<string>> {
        return this._cell2dList;
    }

    /**
     * @param selectIndex TicTacToe의 셀의 x, y좌표
     * @param selectUserName
     * @return 마킹에 성공했는지 여부
     *
     * 마킹에 실패하는 경우
     * 1. 이미 마킹이 되어있는 경우
     * 2. 이미 우승자가 존재하는 경우.
     * 3. 무승부인 경우
     */
    mark(selectIndex: [number, number], selectUserName: string): boolean {

        if(this._gameResult === GameResult.PROCEEDING && this.cellIsEmpty(selectIndex)) {
            this._cell2dList[selectIndex[0]][selectIndex[1]] = selectUserName;
            this.winnerCheck(selectIndex, selectUserName);
            this._markCount++;

            if(this._markCount === this._squareCount * this._squareCount) {
                this._gameResult = GameResult.TIE;
            }

            return true;

        } else {
            return false;
        }
    }

    get winner(): string | null {
        return this._winner;
    }

    get gameResult(): GameResult {
        return this._gameResult;
    }

    private needDiagonalSearch(selectIndex: [number, number]): boolean {
        return (selectIndex[0] === selectIndex[1]) || (selectIndex[0] + selectIndex[1] === this._squareCount - 1);
    }

    private cellIsEmpty(cellIndex: [number, number]):boolean {
        return this._cell2dList[cellIndex[0]][cellIndex[1]] === "";
    }

    private winnerCheck(selectIndex: [number, number], selectUserName: string): void {

        let sameCount = 0;

        if(this.needDiagonalSearch(selectIndex)) {

            sameCount = forwardDiagonalArray(this._cell2dList).filter((userName: string) => userName === selectUserName).length;

            if(sameCount === this._squareCount) {
                this._winner = selectUserName;
                this._gameResult = GameResult.WHO_WIN;
                return;
            }

            sameCount = backwordDiagonalArray(this._cell2dList).filter((userName: string) => userName === selectUserName).length;

            if(sameCount === this._squareCount) {
                this._winner = selectUserName;
                this._gameResult = GameResult.WHO_WIN;
                return;
            }
        }

        sameCount = verticalArray(this._cell2dList, selectIndex[1]).filter((userName: string) => userName === selectUserName).length;

        if(sameCount === this._squareCount) {
            this._winner = selectUserName;
            this._gameResult = GameResult.WHO_WIN;
            return;
        }

        sameCount = this._cell2dList[selectIndex[0]].filter((userName: string) => userName === selectUserName).length;

        if(sameCount === this._squareCount) {
            this._winner = selectUserName;
            this._gameResult = GameResult.WHO_WIN;
            return;
        }
    }
}

export enum GameResult {
    PROCEEDING = "PROCEEDING",
    TIE = "TIE",
    WHO_WIN = "WHO_WIN"
}