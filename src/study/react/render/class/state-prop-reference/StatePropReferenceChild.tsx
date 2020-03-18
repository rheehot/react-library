import * as React from "react";
import MyButton from "../../../common/form/MyButton";

interface AppProp {
    primitiveProp: number,
    referenceProp: Array<number>
}

interface AppState {
    childState: number
}

export default class StatePropReferenceChild extends React.Component<AppProp, AppState> {

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

    shouldComponentUpdate(nextProps: Readonly<AppProp>, nextState: Readonly<AppState>, nextContext: any): boolean {

        console.log(nextProps);
        console.log(this.props);
        console.log(nextProps === this.props);
        console.log(nextProps == this.props);
        debugger;

        console.log(nextState);
        console.log(this.state);
        console.log(nextState === this.state);
        console.log(nextState == this.state);
        debugger;

        return true;
    }

    render() {

        console.log("child render call");

        return (
            <div className="component-wrap">
                Child Component
                <MyButton onClickHandler={this.justSetState}>setState호출(값은 유지)</MyButton>
                <div>부모에게받은 primitive prop = {this.props.primitiveProp}</div>
                <div>부모에게받은 reference prop = {this.props.referenceProp}</div>
            </div>
        );
    }
}
