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
    }

    justSetState = () => {

        this.setState({
            parentState: this.state.parentState
        });
    };

    justSetPrimitive = () => {

        this.primitiveProp = 2;
        console.log(this.primitiveProp);
    };

    justSetReference = () => {

        this.referenceProp = [1, 2, 3];
        console.log(this.referenceProp);
    };

    render() {

        console.log("parent render call");

        return (
            <div className="component-wrap">
                Parent Component
                <MyButton onClickHandler={this.justSetState}>setState호출(state유지)</MyButton>
                <MyButton onClickHandler={this.justSetPrimitive}>props에 primitive 값 대입하기(값 유지)</MyButton>
                <MyButton onClickHandler={this.justSetReference}>props에 reference 값 대입하기(값 유지)</MyButton>

                <NotPureComponentChild primitiveProp={this.primitiveProp} referenceProp={this.referenceProp}/>
            </div>
        )
    }
}
