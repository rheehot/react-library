import numberUtil from "./NumberUtil";

/**
 * @param array2d 정사각형 이차원배열
 * @return 정대각선 방향의 요소를 반환
 * @example ([[1, 2, 3], [4, 5, 6], [7, 8, 9]) ==> [1, 5, 9]
 */
export function forwardDiagonalArray(array2d: Array<Array<any>>): Array<any> {

    return array2d.map((array: Array<any>, rowIndex) => {

        return array.filter((cell: any, columnIndex) => {
            return array[columnIndex] && rowIndex === columnIndex;
        })[0];
    });
}

/**
 * @param array2d 정사각형 이차원배열
 * @return 역대각선 방향의 요소를 반환
 * @example ([[1, 2, 3], [4, 5, 6], [7, 8, 9]) ==> [3, 5, 7]
 */
export function backwordDiagonalArray(array2d: Array<Array<any>>): Array<any> {

    const standardLength = array2d[0].length;

    return array2d.map((array: Array<any>, rowIndex) => {

        return array.filter((cell: any, columnIndex) => {
            return array[columnIndex] && rowIndex + columnIndex === standardLength - 1;
        })[0];
    });
}

const successData1: Array<Array<number>> = [
    numberUtil.getNumberArray(1, 5),
    numberUtil.getNumberArray(6, 10),
    numberUtil.getNumberArray(11, 15),
    numberUtil.getNumberArray(16, 20),
    numberUtil.getNumberArray(21, 25),
];
const successData2: Array<Array<number>> = [
    numberUtil.getNumberArray(1, 5),
    numberUtil.getNumberArray(6, 10),
];
const successData3: Array<Array<number>> = [
    numberUtil.getNumberArray(1, 3),
    numberUtil.getNumberArray(6, 8),
    numberUtil.getNumberArray(11, 13),
    numberUtil.getNumberArray(16, 18),
    numberUtil.getNumberArray(21, 23),
];

const failData = [
    1, 2, 3
];

function diagonalArrayTest() {
    console.log(forwardDiagonalArray(successData1));
    console.log(forwardDiagonalArray(successData2));
    console.log(forwardDiagonalArray(successData3));

    console.log(backwordDiagonalArray(successData1));
    console.log(backwordDiagonalArray(successData2));
    console.log(backwordDiagonalArray(successData3));
}
