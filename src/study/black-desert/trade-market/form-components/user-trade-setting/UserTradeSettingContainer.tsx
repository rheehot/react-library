import * as React from "react"
import {connect} from "react-redux";
import UserTradeSetting from "./UserTradeSetting";
import {RootState} from "../../../../../store/store";
import UserInfo from "../../../common/UserInfo";
import {BlackDesertAction} from "../../../../../store/modules/blackDesert.";

export interface UserTradeSettingProp {
    userInfo: UserInfo,
    changeUserInfo: (userInfo: UserInfo) => void,
    className?: string
}

function UserTradeSettingContainer(props: UserTradeSettingProp) {

    return <UserTradeSetting className={props.className} changeUserInfo={props.changeUserInfo} userInfo={props.userInfo}/>
}

function mapState(rootState: RootState) {

    return {
        userInfo: rootState.blackDesert.userInfo
    }
}

function mapDispatch(dispatch: Function) {

    return {
        changeUserInfo: (userInfo: UserInfo) => dispatch({type: BlackDesertAction.CHANGE_USER_INFO, payload: userInfo})
    }
}

export default connect(mapState, mapDispatch)(UserTradeSettingContainer)
