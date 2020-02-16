import * as React from "react";
import PureComponentChild from "./PureComponentChild";
import MyButton from "../../../common/form/MyButton";

interface AppProp {

}

interface AppState {
    parentState: Array<number>
}

export default class PureComponentParent extends React.Component<AppProp, AppState> {

    constructor(props: AppProp) {

        super(props);

        this.state = {
            parentState: [1, 2, 3]
        };

        this.referenceChange = this.referenceChange.bind(this);
    }

    referenceChange() {

    }

    render() {
        return (
            <div className="component-wrap">
                Parent Component
                <PureComponentChild></PureComponentChild>
                <MyButton onClickHandler={this.referenceChange}>부모 state바꾸기</MyButton>
            </div>
        )
    }
}
