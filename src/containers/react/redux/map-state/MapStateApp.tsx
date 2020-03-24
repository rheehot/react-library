import * as React from "react";
import {Component} from "react";
import OneContainer from "./OneContainer";
import TwoContainer from "./TwoContainer";

export default class MapStateApp extends Component {

    render() {
        return (
            <div className="MapStateApp-wrap">
                <OneContainer/>
                <TwoContainer/>
            </div>
        )
    }
}
