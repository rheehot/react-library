export default function mineMapInit(mineMap: Array<Array<number>>): Array<Array<number>> {

    return mineMap.map((mineTr, rowIndex) => {
        return mineTr.map((mineTd, columnIndex) => {

            let mineCount = 0;

            if(canLeft(columnIndex))
                mineCount = ifTrueAdd(mineCount, mineMap[rowIndex][columnIndex - 1] === -1);

            if(canLeft(columnIndex) && canTop(rowIndex))
                mineCount = ifTrueAdd(mineCount, mineMap[rowIndex - 1][columnIndex - 1] === -1);

            if(canTop(rowIndex))
                mineCount = ifTrueAdd(mineCount, mineMap[rowIndex - 1][columnIndex] === -1);

            if(canTop(rowIndex) && canRight(columnIndex))
                mineCount = ifTrueAdd(mineCount, mineMap[rowIndex - 1][columnIndex + 1] === -1);

            if(canRight(columnIndex))
                mineCount = ifTrueAdd(mineCount, mineMap[rowIndex][columnIndex + 1] === -1);

            if(canRight(columnIndex) && canBottom(rowIndex))
                mineCount = ifTrueAdd(mineCount, mineMap[rowIndex + 1][columnIndex + 1] === -1);

            if(canRight(columnIndex))
                mineCount = ifTrueAdd(mineCount, mineMap[rowIndex + 1][columnIndex] === -1);

            if(canLeft(columnIndex) && canBottom(rowIndex))
                mineCount = ifTrueAdd(mineCount, mineMap[rowIndex + 1][columnIndex - 1] === -1);

            console.log(rowIndex, columnIndex);
            return mineCount;
        });
    });

    /*
    왼쪽가능? --> 왼쪽 -1임? +1
    오른쪽가능? --> 오른쪽 -1임? +1 이렇게 8방향을 조져야댐.
     */

    function ifTrueAdd(val:number, bool: boolean):number {
        
        if(bool)
            return val + 1;
        
        else
            return val;
    }

    function canLeft(columnIndex: number): boolean {
        return columnIndex !== 0;
    }

    function canRight(columnIndex: number): boolean {
        return columnIndex < mineMap[0].length;
    }

    function canTop(rowIndex: number): boolean {
        return rowIndex !== 0;
    }

    function canBottom(rowIndex: number): boolean {
        return rowIndex < mineMap.length;
    }
};
