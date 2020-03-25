import * as React from "react"
import {connect} from "react-redux";
import UserTradeSetting from "./UserTradeSetting";
import {RootState} from "../../../../redux/store";
import UserInfo from "../../../../classes/black-desert/UserInfo";
import {changeUserInfo} from "../../../../redux/modules/blackDesert";

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

const mapDispatch = {
    changeUserInfo
};

export default connect(mapState, mapDispatch)(UserTradeSettingContainer)
