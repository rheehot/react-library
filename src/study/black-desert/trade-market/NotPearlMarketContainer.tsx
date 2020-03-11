import * as React from "react"
import {connect} from "react-redux";
import NotPearlMarket from "./NotPearlMarket";
import UserInfo from "./UserInfo";
import {BlackDesertAction} from "../../../store/modules/blackDesert.";
import {RootState} from "../../../store/store";

export interface BlackDesertInterface {
    userInfo: UserInfo;
    changeUserInfo: (userInfo: UserInfo) => void
}

function NotPearlMarketContainer(props: BlackDesertInterface) {

    return <NotPearlMarket userInfo={props.userInfo} changeUserInfo={props.changeUserInfo}/>
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

export default connect(mapState, mapDispatch)(NotPearlMarketContainer)
