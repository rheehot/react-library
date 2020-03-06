import * as React from "react";
import {Component} from "react";
import {Provider} from "react-redux";
import {store} from "../store";
import MapStateOneContainer from "./MapStateOneContainer";
import MapStateTwoContainer from "./MapStateTwoContainer";

export default class MapStateApp extends Component {

    render() {
        return (
            <Provider store={store}>
                <MapStateOneContainer/>
                <MapStateTwoContainer/>
            </Provider>
        )
    }
}
