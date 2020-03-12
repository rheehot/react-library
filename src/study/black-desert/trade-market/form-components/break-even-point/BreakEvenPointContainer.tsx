import * as React from "react"
import {connect} from "react-redux";
import BreakEvenPoint from "./BreakEvenPoint";
import {RootState} from "../../../../../store/store";
import UserInfo from "../../../common/UserInfo";

export interface BreakEvenPointProp {
    userInfo: UserInfo
}

function BreakEvenPointContainer(props: BreakEvenPointProp) {

    return <BreakEvenPoint userInfo={props.userInfo}/>
}

function mapState(rootState: RootState) {

    return {
        userInfo: rootState.blackDesert.userInfo
    }
}

export default connect(mapState)(BreakEvenPointContainer)
