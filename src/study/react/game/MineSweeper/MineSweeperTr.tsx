import * as React from "react";
import MineSweeperTd from "./MineSweeperTd";

interface AppProp {
    tds: Array<number>
    rowIndex:number
}

interface AppState {

}

export default class MineSweeperTr extends React.Component<AppProp, AppState> {

    render() {

        const mineTds = new Array(this.props.tds.length).fill("").map((item, index) => {
            return <MineSweeperTd key={`td-${index}`} rowIndex={this.props.rowIndex} columnIndex={index}/>
        });

        return (
            <div className="mine-tr">
                {mineTds}
            </div>
        )
    }
}
