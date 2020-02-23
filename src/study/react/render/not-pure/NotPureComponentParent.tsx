import * as React from "react";
import NotPureComponentChild from "./NotPureComponentChild";
import MyButton from "../../common/form/MyButton";

interface AppProp {

}

interface AppState {
    parentState: Array<number>
}

export default class NotPureComponentParent extends React.Component<AppProp, AppState> {

    primitiveField: number = 1;
    referenceField: Array<number> = [1, 2, 3];

    constructor(props: AppProp) {

        super(props);

        this.state = {
            parentState: [1, 2, 3]
        };

        this.justSetState = this.justSetState.bind(this);
        this.changePrimitiveField = this.changePrimitiveField.bind(this);
        this.changeReferenceField = this.changeReferenceField.bind(this);
    }

    changeReferenceField() {
        this.referenceField = [...this.referenceField, this.primitiveField];
    }

    changePrimitiveField() {
        this.primitiveField++;
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
                <MyButton onClickHandler={this.changePrimitiveField}>primitiveProp변경하기</MyButton>
                <MyButton onClickHandler={this.changeReferenceField}>referenceProp변경하기</MyButton>

                <NotPureComponentChild primitiveProp={this.primitiveField} referenceProp={this.referenceField}></NotPureComponentChild>
            </div>
        )
    }
}
