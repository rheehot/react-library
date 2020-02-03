import * as React from "react";
import "./TicTacToe.scss";
import {verticalArrayTest} from "../../../typescript/random/squareArrayUtil";

interface AppProp {

}

interface AppState {

}

export default class TicTacToeGame extends React.Component<AppProp, AppState> {

    constructor(props: any) {
        super(props);
        verticalArrayTest();
    }

    render() {
        return (
            <div className="tic-tac-toe-wrap">
                tic tac toe
            </div>
        )
    }
}
