import * as React from "react";
import MyButton from "../../../common/form/MyButton";

interface AppProp {
    setParentPrimitiveState: () => void,
    setParentReferenceState: () => void
}

interface AppState {
    primitive: number,
    reference: Array<number>
}

export default class MultiSetStateChild extends React.Component<AppProp, AppState> {

    constructor(props: AppProp) {
        super(props);

        this.state = {
            primitive: 0,
            reference: [1, 2, 3]
        };

        this.parentSetState = this.parentSetState.bind(this);
        this.childSetState = this.childSetState.bind(this);
        this.allSetState = this.allSetState.bind(this);
        this.tripleAllSetState = this.tripleAllSetState.bind(this);
    }

    parentSetState() {
        this.props.setParentPrimitiveState();
        this.props.setParentReferenceState();
    }

    childSetState() {

        this.setState(prevState => {

            return {
                primitive: prevState.primitive + 1,
            }
        });

        this.setState(prevState => {

            return {
                reference: [...prevState.reference, prevState.primitive]
            }
        });
    }

    allSetState() {
        this.childSetState();
        this.parentSetState();
    }

    tripleAllSetState() {

        this.allSetState();
        this.allSetState();
        this.allSetState();
    }

    shouldComponentUpdate(nextProps: Readonly<AppProp>, nextState: Readonly<AppState>, nextContext: any): boolean {
        console.log(`${MultiSetStateChild.name} -- shouldComponentUpdate call`);
        return true;
    }

    render() {

        console.log(`${MultiSetStateChild.name} -- render call`);

        return (
            <>
                <div className="component-wrap">
                    <div>자식 primitive = {this.state.primitive}</div>
                    <div>자식 primitive = {this.state.reference}</div>
                </div>
                <MyButton onClickHandler={this.parentSetState}>부모 setState 2개 호출</MyButton>
                <MyButton onClickHandler={this.childSetState}>자식 setState 2개 호출</MyButton>
                <MyButton onClickHandler={this.allSetState}>부모, 자식 setState 4개 호출</MyButton>
                <MyButton onClickHandler={this.tripleAllSetState}>부모, 자식 setState 4개 3번씩 호출</MyButton>
            </>
        )
    }
}
