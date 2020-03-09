import * as React from "react"
import {connect} from "react-redux";
import BlackDesert from "./BlackDesert";
import BlackDesertUserInfo from "./BlackDesertUserInfo";
import {BlackDesertAction} from "../../../../store/modules/blackDesert.";
import {RootState} from "../../../../store/store";

export interface BlackDesertInterface {
    userInfo: BlackDesertUserInfo;
    changeUserInfo: (userInfo: BlackDesertUserInfo) => void
}

function BlackDesertContainer(props: BlackDesertInterface) {

    return <BlackDesert userInfo={props.userInfo} changeUserInfo={props.changeUserInfo}/>
}

function mapState(rootState: RootState) {

    return {
        userInfo: rootState.blackDesert.userInfo
    }
}

function mapDispatch(dispatch: Function) {

    return {
        changeUserInfo: (userInfo: BlackDesertUserInfo) => dispatch({type: BlackDesertAction.CHANGE_USER_INFO, payload: userInfo})
    }
}

export default connect(mapState, mapDispatch)(BlackDesertContainer)
