import * as React from "react";
import MyButton from "../../../common/form/MyButton";
import PropReRenderChild from "./StatePropReferenceChild";

interface AppProp {

}

interface AppState {
    parentState: Array<number>
}

export default class StatePropReferenceParent extends React.Component<AppProp, AppState> {

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
                <MyButton onClickHandler={this.justSetState}>setState호출(값은 유지)</MyButton>
                <MyButton onClickHandler={() => this.forceUpdate()}>forceUpdate</MyButton>

                <PropReRenderChild primitiveProp={this.primitiveField} referenceProp={this.referenceField}/>
            </div>
        )
    }
}
