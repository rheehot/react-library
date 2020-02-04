import * as React from "react";
import TicTacToeGame from "./TicTacToeGame";

interface AppProp {

}

interface AppState {

}

export default class TicTacToeHome extends React.Component<AppProp, AppState> {

    render() {
        return (
            <div className="component-wrap">
                <h1>TicTacToe Game</h1>
                <TicTacToeGame sqaureCount={4} playerList={["철수", "영희"]}/>
            </div>
        )
    }
}
