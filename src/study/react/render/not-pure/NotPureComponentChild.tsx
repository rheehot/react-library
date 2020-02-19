import * as React from "react";
import MyButton from "../../common/form/MyButton";

interface AppProp {

}

interface AppState {
    childState: number
}

export default class NotPureComponentChild extends React.Component<AppProp, AppState> {

    constructor(props: AppProp) {
        super(props);

        this.state = {
            childState: 1
        };

        this.justSetState = this.justSetState.bind(this);
    }

    justSetState() {

        this.setState({
            childState: this.state.childState
        });
    }

    render() {

        console.log("child render call");

        return (
            <div className="component-wrap">
                Child Component
                <MyButton onClickHandler={this.justSetState}>setState호출(state유지)</MyButton>
            </div>
        )
    }
}
