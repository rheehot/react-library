import * as React from "react";
import {Component} from "react";
import {Provider} from "react-redux";
import {store} from "../store";
import OneContainer from "./OneContainer";
import TwoContainer from "./TwoContainer";

export default class MapStateApp extends Component {

    render() {
        return (
            <Provider store={store}>
                <OneContainer/>
                <TwoContainer/>
            </Provider>
        )
    }
}
