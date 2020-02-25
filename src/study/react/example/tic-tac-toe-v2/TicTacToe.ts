import {getSquareCount} from "../../../typescript/random/squareArrayUtil";
import ArgumentError from "../../../typescript/ArgumentError";

export enum GameResult {
    PROCEEDING = "PROCEEDING",
    TIE = "TIE",
    WHO_WIN = "WHO_WIN"
}

function mustBeSquareArray(array2d: Array<Array<any>>) {

    const squareCount = getSquareCount(array2d);

    if(squareCount === -1)
        throw new ArgumentError(`정사각형 2차원배열이 아닙니다. array=${array2d}`);
}

/**
 * @param rowIndex
 * @param columnIndex
 * @param userName
 * @param cellGrid 마킹 되어있는 2차원 배열
 * @return 성공한 마킹이 적용된 2차원배열 | null
 *
 * 마킹이 실패하는 경우
 * 1. 이미 무승부인 경우
 * 2. 게임이 누군가의 승리인 경우
 * 3. 이미 마킹하려고 하는 자리에 마킹이 되어있는 경우
 */
function _mark(rowIndex: number, columnIndex: number, userName: string, cellGrid: Array<Array<string>>): Array<Array<string>> | null {

    /**
     * gameResult가 무승부인지, WhoWin인지 체크해서 해당되면 null반환
     */

    /**
     * 진행중일 때만 해당 x, y좌표에 마킹하고 해당 배열 반환.
     */

    return null;
}

export const mark = new Proxy(_mark, {
    apply: (target, thisArg, args) => {
        mustBeSquareArray(args[3]);
        return target.apply(thisArg, args);
    }
});

function _getWiner(cellGrid: Array<Array<string>>): string | null {
    return;
}

export const getWiner = new Proxy(_getWiner, {
    apply: (target, thisArg, args) => {
        mustBeSquareArray(args[0]);
        return target.apply(thisArg, args);
    }
});

function _getGameResult(cellGrid: Array<Array<string>>): GameResult | null {
    return;
}

export const getGameResult = new Proxy(_getGameResult, {
    apply: (target, thisArg, args) => {
        mustBeSquareArray(args[0]);
        return target.apply(thisArg, args);
    }
});

export function playerIndex(rowIndex: number, columnIndex: number, playerList: Array<string>, cellGrid: Array<Array<string>>): number {
    return playerList.indexOf(cellGrid[rowIndex][columnIndex]);
}

function _needDiagonalSearch(rowIndex: number, columnIndex: number, cellGrid: Array<Array<string>>): boolean {
    return false;
}

export const needDiagonalSearch = new Proxy(_needDiagonalSearch, {
    apply: (target, thisArg, args) => {
        mustBeSquareArray(args[2]);
        return target.apply(thisArg, args);
    }
});

function cellIsEmpty(cellIndex: [number, number], cellGrid: Array<Array<string>>):boolean {
    return this._cell2dList[cellIndex[0]][cellIndex[1]] === "";
}

function _cellProcess(callback: Function):any {

    /**
     * 상하좌우 전부 대조
     * null이 아니면 즉시 그 값 반환
     * 전부 다 null이면
     *
     * winer의 경우에는 그냥 우승자없는걸로 알면되지만
     * gameResult가 문제임.
     */
}

function winerCallback(cell1d: Array<string>) {
}

function gameResultCallback(cell1d: Array<string>) {
}
