import * as React from "react"
import {connect} from "react-redux";
import DiffBenefitDetail from "./DiffBenefitDetail";
import {RootState} from "../../../../store/store";

interface AppProp {

}

function DiffBenefitDetailContainer(props: AppProp) {

    return <DiffBenefitDetail/>
}

function mapState(rootState: RootState) {

    return {}
}

function mapDispatch(dispatch: Function) {

    return {}
}

export default connect(mapState, mapDispatch)(DiffBenefitDetailContainer)
