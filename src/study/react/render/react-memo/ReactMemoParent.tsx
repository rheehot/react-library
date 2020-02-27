import * as React from "react";
import {ReactMemoChild} from "./ReactMemoChild";
import MyButton from "../../common/form/MyButton";

interface AppProp {

}

interface AppState {
    primitive: number,
    reference: Array<number>
}

export default class ReactMemoParent extends React.Component<AppProp, AppState> {

    constructor(props: AppProp) {
        super(props);

        this.state = {
            primitive: 0,
            reference: [1, 2, 3]
        };

        this.setParentPrimitiveState = this.setParentPrimitiveState.bind(this);
    }

    setParentPrimitiveState() {

        this.setState(prevState => {
            return {
                primitive: prevState.primitive + 1
            }
        });
    }

    setParentReferenceState() {

        this.setState(prevState => {
            return {
                reference: [...prevState.reference, 0]
            }
        });
    }

    render() {

        return (
            <div className="component-wrap">
                <MyButton onClickHandler={this.setParentPrimitiveState}>부모prop 바꾸기</MyButton>
                <MyButton onClickHandler={() => this.forceUpdate()}>부모forceUpdate</MyButton>
                <ReactMemoChild primitiveProp={this.state.primitive}/>
            </div>
        )
    }
}
