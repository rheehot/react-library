import * as React from "react"
import {connect} from "react-redux";
import DiffBenefitDetail from "./DiffBenefitDetail";
import {RootState} from "../../../../store/store";
import UserInfo from "../../common/UserInfo";

interface AppProp {
    userInfo: UserInfo
}

function DiffBenefitDetailContainer(props: AppProp) {

    return <DiffBenefitDetail userInfo={props.userInfo}/>
}

function mapState(rootState: RootState) {

    return {
        userInfo: rootState.blackDesert.userInfo
    }
}

function mapDispatch(dispatch: Function) {

    return {}
}

export default connect(mapState, mapDispatch)(DiffBenefitDetailContainer)
