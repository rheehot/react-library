import * as React from "react";
import TicTacToeTd from "./TicTacToeTd";

interface AppProp {
    rowIndex: number,
    cell2dList: Array<Array<string>>,
    playerList: [string, string],
    mark: Function,
    currentUserIndex: number
}

interface AppState {

}

export default class TicTacToeTr extends React.Component<AppProp, AppState> {

    tds() {
        return (
          this.props.cell2dList[this.props.rowIndex].map( (tds, columnIndex) => {
              return <TicTacToeTd key={`td-${columnIndex}`} columnIndex={columnIndex} {...this.props} />
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
