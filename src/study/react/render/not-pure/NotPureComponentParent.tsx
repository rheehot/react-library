import * as React from "react";
import NotPureComponentChild from "./NotPureComponentChild";
import MyButton from "../../common/form/MyButton";

interface AppProp {

}

interface AppState {
    parentState: Array<number>
}

export default class NotPureComponentParent extends React.Component<AppProp, AppState> {
    referenceOrigin: Array<number> = [1, 2, 3];
    primitiveProp: number = 1;
    referenceProp: Array<number> = this.referenceOrigin;

    constructor(props: AppProp) {
        super(props);

        this.state = {
            parentState: [1, 2, 3]
        };

        this.justSetState = this.justSetState.bind(this);
        this.changePrimitive = this.changePrimitive.bind(this);
        this.changeReference = this.changeReference.bind(this);
    }

    justSetState() {

        this.setState({
            parentState: this.state.parentState
        });
    };

    changePrimitive() {

        console.log(this.primitiveProp);
        this.primitiveProp = 2;
    };

    changeReference() {

        console.log(this.referenceProp);
        this.referenceProp = [4, 5, 6];
    };

    render() {

        console.log("parent render call");

        return (
            <div className="component-wrap">
                Parent Component
                <MyButton onClickHandler={this.justSetState}>setState호출(state유지)</MyButton>
                <MyButton onClickHandler={this.changePrimitive}>props에 primitive 값 대입하기(값 변경)</MyButton>
                <MyButton onClickHandler={this.changeReference}>props에 reference 값 대입하기(값 변경)</MyButton>

                <NotPureComponentChild primitiveProp={this.primitiveProp} referenceProp={this.referenceProp}/>
            </div>
        )
    }
}
