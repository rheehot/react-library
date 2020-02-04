import * as React from "react";
import TicTacToeTd from "./TicTacToeTd";

interface AppProp {
    rowIndex: number,
    cell2dList: Array<Array<string>>,
    playerList: [string, string],
    mark: Function
}

interface AppState {

}

export default class TicTacToeTr extends React.Component<AppProp, AppState> {

    tds() {
        return (
          this.props.cell2dList[this.props.rowIndex].map( (tds, columnIndex) => {
              return <TicTacToeTd key={`td-${columnIndex}`} rowIndex={this.props.rowIndex} columnIndex={columnIndex} playerList={this.props.playerList} cell2dList={this.props.cell2dList} mark={this.props.mark}/>
          })
        );
    }

    render() {
        return (
            <tr className="component-wrap">
                {this.tds()}
            </tr>
        )
    }
}
