import * as React from "react"
import {connect} from "react-redux";
import DiffBenefitDetail from "./DiffBenefitDetail";
import {RootState} from "../../../../redux/store";
import UserInfo from "../../../../classes/black-desert/UserInfo";

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

export default connect(mapState)(DiffBenefitDetailContainer)
