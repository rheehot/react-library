import * as React from "react";
import CircleSymbol from "../symbol/CircleSymbol";

interface AppProp {
    rowIndex: number,
    columnIndex: number,
    mark: Function,
    cellValue: number
}

interface AppState {

}

export default class TicTacToeTd extends React.Component<AppProp, AppState> {

    test: void = fieldInit();

    constructor(props: AppProp) {
        super(props);

        console.log("tictactoe td constructor call");
    }

    shouldComponentUpdate(nextProps: Readonly<AppProp>, nextState: Readonly<AppState>, nextContext: any): boolean {
        return nextProps.cellValue !== this.props.cellValue;
    }

    componentDidMount(): void {
        console.log("tictactoe td componentDidMount call");
    }

    componentWillUnmount(): void {
        console.log("tictactoe td componentWillUnmount call");
    }

    componentDidUpdate(prevProps: Readonly<AppProp>, prevState: Readonly<AppState>, snapshot?: any): void {
        console.log("tictactoe td componentDidUpdate call");
    }

    render() {

        console.log("tictactoe td render call");

        return (
            <td className="tic-tac-toe-td" onClick={() => this.props.mark([this.props.rowIndex, this.props.columnIndex])}>
                <CircleSymbol colorIndex={this.props.cellValue}></CircleSymbol>
            </td>
        )
    }
}

function fieldInit() {
    console.log("tictactoe td field init");
}