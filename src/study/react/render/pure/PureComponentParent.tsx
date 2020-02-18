import * as React from "react";
import PureComponentChild from "./PureComponentChild";
import MyButton from "../../common/form/MyButton";

interface AppProp {

}

interface AppState {
    parentState: Array<number>
}

export default class PureComponentParent extends React.PureComponent<AppProp, AppState> {

    constructor(props: AppProp) {

        super(props);

        this.state = {
            parentState: [1, 2, 3]
        };

        this.referenceChange = this.referenceChange.bind(this);
    }

    referenceChange() {

        this.setState({
            parentState: [1, 2, 3]
        });

    }

    render() {

        console.log("parent render call");

        return (
            <div className="component-wrap">
                Parent Component
                <MyButton onClickHandler={this.referenceChange}>부모 state바꾸기</MyButton>
                <MyButton onClickHandler={() => this.forceUpdate()}>부모 forceUpdate</MyButton>

                <PureComponentChild></PureComponentChild>
            </div>
        )
    }
}
