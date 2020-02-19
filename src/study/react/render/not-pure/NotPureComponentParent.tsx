import * as React from "react";
import NotPureComponentChild from "./NotPureComponentChild";
import MyButton from "../../common/form/MyButton";

interface AppProp {

}

interface AppState {
    parentState: Array<number>
}

export default class NotPureComponentParent extends React.Component<AppProp, AppState> {

    constructor(props: AppProp) {

        super(props);

        this.state = {
            parentState: [1, 2, 3]
        };

        this.justSetState = this.justSetState.bind(this);
    }

    justSetState() {

        this.setState({
            parentState: this.state.parentState
        });
    }

    render() {

        console.log("parent render call");

        return (
            <div className="component-wrap">
                Parent Component
                <MyButton onClickHandler={this.justSetState}>setState호출(state유지)</MyButton>

                <NotPureComponentChild></NotPureComponentChild>
            </div>
        )
    }
}
