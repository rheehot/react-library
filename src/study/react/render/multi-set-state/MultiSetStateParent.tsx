import * as React from "react";
import MultiSetStateChild from "./MultiSetStateChild";

interface AppProp {

}

interface AppState {
    primitive: number,
    reference: Array<number>
}

export default class MultiSetStateParent extends React.Component<AppProp, AppState> {

    constructor(props: AppProp) {
        super(props);

        this.state = {
            primitive: 0,
            reference: [1, 2, 3]
        };

        this.setParentPrimitiveState = this.setParentPrimitiveState.bind(this);
        this.setParentReferenceState = this.setParentReferenceState.bind(this);
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

    shouldComponentUpdate(nextProps: Readonly<AppProp>, nextState: Readonly<AppState>, nextContext: any): boolean {
        console.log(`${MultiSetStateParent.name} -- shouldComponentUpdate call`);
        return true;
    }

    render() {
        console.log(`${MultiSetStateParent.name} -- render call`);

        return (
            <>
                <div className="component-wrap">
                    <div>부모 primitive = {this.state.primitive}</div>
                    <div>부모 primitive = {this.state.reference}</div>
                </div>
                <MultiSetStateChild setParentPrimitiveState={this.setParentPrimitiveState} setParentReferenceState={this.setParentReferenceState}/>
            </>
        )
    }
}
