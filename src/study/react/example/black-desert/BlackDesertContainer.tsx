import * as React from "react"
import {RootState} from "../../redux/store";
import {connect} from "react-redux";
import BlackDesert from "./BlackDesert";

interface AppProp {

}

function BlackDesertContainer(props: AppProp) {

    return <BlackDesert/>
}

function mapState(rootState: RootState) {

    return {}
}

function mapDispatch(dispatch: Function) {

    return {}
}

export default connect(mapState, mapDispatch)(BlackDesertContainer)
