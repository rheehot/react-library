import * as React from "react";
import MineSweeperTr from "./MineSweeperTr";
import mineMapInit from "./mineMapInit";

interface AppProp {

}

interface AppState {
    mineMap: Array<Array<number>>,
}

export default class MineSweeper extends React.Component<AppProp, AppState> {

    constructor(props: any) {
        super(props);

        this.state = ({
            mineMap: mineMapInit([
                [-1, 0, 0, 0, 0],
                [0, -1, 0, 0, 0],
                [0, 0, -1, 0, 0],
                [0, -1, 0, -1, 0],
                [-1, 0, 0, 0, -1],
            ])
        });
    }

    render() {

        const mineTrs = Array(this.state.mineMap.length).fill("").map((item, index) => {

            return (
                <MineSweeperTr key={`tr-${index}`} rowIndex={index} tds={this.state.mineMap[index]} mineMap={this.state.mineMap}/>
            )
        });

        return (
            <div className="component-wrap">
                {mineTrs}
            </div>
        )
    }
}

function asyncTest(): Promise<number> {

    console.log("asyncTest() start");

    const promise = new Promise<number>(resolve => {
        console.log("promise start");
        const result = syncTest();
        const result2 = syncTest();
        resolve(result + result2);
        console.log("promise end");
    });

    console.log("asyncTest() end");

    return promise;
}

async function asyncTest2(): Promise<number> {

    console.log("asyncTest2() start");

    const result = await new Promise<number>(resolve => {
        console.log("promise start");
        resolve(syncTest());
        console.log("promise end");
    });

    console.log("asyncTest2() end");

    return result;
}

function syncTest(): number {
    for (let i = 0; i < 1999999999; i++) {}
    return 456;
}

/*
await은 promise가 resolve될 때까지 기다렸다가.
try {
    await ...
} catch {

    await으로 promise가 reject되는 경우 여기로 오려나?
}
 */
