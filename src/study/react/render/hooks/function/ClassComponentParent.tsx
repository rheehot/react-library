import * as React from "react";
import FunctionalChild from "./FunctionalChild";
import MyButton from "../../../common/form/MyButton";
import {FunctionalMemoChild} from "./FunctionalMemoChild";

interface AppProp {

}

interface AppState {

}

export default class ClassComponentParent extends React.PureComponent<AppProp, AppState> {

    primitiveProp: number = 1;
    referenceProp: Array<number> = [1, 2, 3];

    render() {
        return (
            <div className="component-wrap">
                <div>
                    <MyButton onClickHandler={() => this.forceUpdate()}>부모 forceUpdate</MyButton>
                    <MyButton onClickHandler={() => {this.primitiveProp = 3}}>prop바꾸기</MyButton>
                </div>
                <FunctionalChild primitiveProp={this.primitiveProp} referenceProp={this.referenceProp}/>
                <FunctionalMemoChild primitiveProp={this.primitiveProp} referenceProp={this.referenceProp}/>
            </div>
        )
    }
}
