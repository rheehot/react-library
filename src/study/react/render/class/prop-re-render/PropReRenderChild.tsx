import * as React from "react";
import MyButton from "../../../common/form/MyButton";

interface AppProp {
    primitiveProp: number,
    referenceProp: Array<number>
}

interface AppState {
    childState: number
}

export default class PropReRenderChild extends React.Component<AppProp, AppState> {

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

    myPropConsoleLog = () => {
        console.log(this.props);
    };

    render() {

        console.log("child render call");

        return (
            <div className="component-wrap">
                Child Component
                <MyButton onClickHandler={this.justSetState}>setState호출(state유지)</MyButton>
                <MyButton onClickHandler={this.myPropConsoleLog}>현재 prop 콘솔에 찍기</MyButton>
                <div>부모에게받은 primitive prop = {this.props.primitiveProp}</div>
                <div>부모에게받은 reference prop = {this.props.referenceProp}</div>
                <div>부모에게받은 dynamic prop = {this.props.dynamicProp}</div>
            </div>
        );
    }
}
