import * as React from "react";
import MyButton from "../../../common/form/MyButton";
import WhenPropUpdateChild from "./WhenPropUpdateChild";

interface AppProp {

}

interface AppState {
    primitiveField: number
}

export default class WhenPropUpdateParent extends React.PureComponent<AppProp, AppState> {

    constructor(props: AppProp) {

        super(props);

        this.state = {
            primitiveField: 1
        };

        this.changePrimitiveField = this.changePrimitiveField.bind(this);
    }

    changePrimitiveField() {
        this.setState(prevState => {
            return {
                primitiveField: prevState.primitiveField + 1
            };
        });
    }

    render() {

        console.log("parent render call");

        return (
            <div className="component-wrap">
                <MyButton onClickHandler={this.changePrimitiveField}>prop변경</MyButton>
                <WhenPropUpdateChild primitiveProps={this.state.primitiveField}/>
            </div>
        )
    }
}
