import * as React from "react";
import "./TicTacToe.scss";

interface AppProp {

}

interface AppState {

}

export default class TicTacToe extends React.Component<AppProp, AppState> {

    render() {
        return (
            <div className="tic-tac-toe-wrap">
                tic tac toe
            </div>
        )
    }
}
