import {getNumberArray} from "./numberUtil";

/**
 * @param array2d 정사각형 이차원배열
 * @return 정대각선 방향의 요소를 반환
 * @example ([[1, 2, 3], [4, 5, 6], [7, 8, 9]) ==> [1, 5, 9]
 */
export function forwardDiagonalArray(array2d: Array<Array<any>>): Array<any> {
    return array2d.map((array: Array<any>, rowIndex) => array[rowIndex]);
}

/**
 * @param array2d 정사각형 이차원배열
 * @return 역대각선 방향의 요소를 반환
 * @example ([[1, 2, 3], [4, 5, 6], [7, 8, 9]) ==> [3, 5, 7]
 */
export function backwordDiagonalArray(array2d: Array<Array<any>>): Array<any> {

    const standardLength = array2d[0].length;
    return array2d.map((array: Array<any>, rowIndex) => array[standardLength - rowIndex - 1]);
}

export function verticalArray(array2d: Array<Array<any>>, columnIndex: number) {
    return array2d.map(array => array[columnIndex]);
}

export function getSquareArray(squareCount: number): Array<Array<undefined>> {
    return new Array(squareCount).fill(undefined).map(() => new Array(squareCount).fill(undefined));
}

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
export function flat(arr: Array<any>, depth = 1): Array<any> {
    return depth > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val, depth - 1) : val), [])
        : arr.slice();
}

/**
 * @param squareArray 2차원배열
 * @return 정사각형 2차원배열이면 한 변의 길이를 반환하고, 정사각형 2차원배열이 아니면 -1을 반환
 */
export function getSquareCount(squareArray: Array<Array<any>>): number {

    const firstArray = squareArray[0];

    if(! Array.isArray(firstArray))
        return -1;

    const isSquareArray = squareArray.every(val => {

        if (! Array.isArray(val))
            return false;

        else
            return val.length === firstArray.length;
    });

    if(! isSquareArray)
        return -1;

    return flat(squareArray).length / firstArray.length;
}

const successData1: Array<Array<number>> = [
    getNumberArray(1, 5),
    getNumberArray(6, 10),
    getNumberArray(11, 15),
    getNumberArray(16, 20),
    getNumberArray(21, 25),
];
const successData2: Array<Array<number>> = [
    getNumberArray(1, 5),
    getNumberArray(6, 10),
];
const successData3: Array<Array<number>> = [
    getNumberArray(1, 3),
    getNumberArray(6, 8),
    getNumberArray(11, 13),
    getNumberArray(16, 18),
    getNumberArray(21, 23),
];

const failData = [
    1, 2, 3
];

export function diagonalArrayTest() {
    console.log(forwardDiagonalArray(successData1));
    console.log(forwardDiagonalArray(successData2));
    console.log(forwardDiagonalArray(successData3));

    console.log(backwordDiagonalArray(successData1));
    console.log(backwordDiagonalArray(successData2));
    console.log(backwordDiagonalArray(successData3));
}

export function verticalArrayTest() {

    console.log(verticalArray(successData1, 1));
    console.log(verticalArray(successData2, 2));
    console.log(verticalArray(successData3, 4));
}
