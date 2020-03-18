import * as React from "react";
import MyButton from "../../../common/form/MyButton";

interface AppProp {

}

interface AppState {
    childState: Array<number>
}

export default class PureComponentChild extends React.PureComponent<AppProp, AppState> {

    constructor(props: AppProp) {
        super(props);

        this.state = {
            childState: [1, 2, 3]
        };

        this.referenceChange = this.referenceChange.bind(this);
    }

    referenceChange() {

        this.setState({
            childState: [1, 2, 3]
        });
    }

    shouldComponentUpdate(nextProps: Readonly<AppProp>, nextState: Readonly<AppState>, nextContext: any): boolean {

        console.log(nextProps);
        console.log(nextState);

        console.log("child shouldComponentUpdate call");
        return true;
    }

    render() {

        console.log("child render call");

        return (
            <div className="component-wrap">
                Child PureComponent
                <MyButton onClickHandler={this.referenceChange}>자식 state 바꾸기</MyButton>
                <MyButton onClickHandler={() => this.forceUpdate()}>자식 forceUpdate</MyButton>
            </div>
        )
    }
}
