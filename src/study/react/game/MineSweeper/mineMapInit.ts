export default function mineMapInit(mineMap: Array<Array<number>>): Array<Array<number>> {

    return mineMap.map((mineTr, rowIndex) => {
        return mineTr.map((mineTd, columnIndex) => {

            let mineCount = 0;

            if(mineTd === -1) return -1;

            try {
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

                if(canBottom(rowIndex))
                    mineCount = ifTrueAdd(mineCount, mineMap[rowIndex + 1][columnIndex] === -1);

                if(canLeft(columnIndex) && canBottom(rowIndex))
                    mineCount = ifTrueAdd(mineCount, mineMap[rowIndex + 1][columnIndex - 1] === -1);

            }catch(e) {
                console.log("fail", rowIndex, columnIndex);
            }

            return mineCount;
        });
    });

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
        return columnIndex < mineMap[0].length - 1;
    }

    function canTop(rowIndex: number): boolean {
        return rowIndex !== 0;
    }

    function canBottom(rowIndex: number): boolean {
        return rowIndex < mineMap.length - 1;
    }
};
