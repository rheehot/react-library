import * as React from "react";
import Routes from "../route/routes";

interface AppProp {

}

interface AppState {

}

export default class AppMain extends React.Component<AppProp, AppState> {

    render() {
        return (
            <div className="main">
                <Routes/>
            </div>
        )
    }
}
