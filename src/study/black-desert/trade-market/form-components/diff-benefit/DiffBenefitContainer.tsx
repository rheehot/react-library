import * as React from "react"
import {connect} from "react-redux";
import DiffBenefit from "./DiffBenefit";
import {RootState} from "../../../../../store/store";
import UserInfo from "../../../common/UserInfo";

export interface DiffBenefitProp {
    userInfo: UserInfo
}

function DiffBenefitContainer(props: DiffBenefitProp) {

    return <DiffBenefit userInfo={props.userInfo}/>
}

function mapState(rootState: RootState) {

    return {
        userInfo: rootState.blackDesert.userInfo
    }
}

export default connect(mapState)(DiffBenefitContainer)
