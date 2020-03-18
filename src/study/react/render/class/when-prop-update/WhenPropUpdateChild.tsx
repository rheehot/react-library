import * as React from "react";

interface AppProp {
    primitiveProps: number
}

interface AppState {

}

export default class WhenPropUpdateChild extends React.Component<AppProp, AppState> {

    shouldComponentUpdate(nextProps: Readonly<AppProp>, nextState: Readonly<AppState>, nextContext: any): boolean {
        console.log("shouldComponentUpdate--this.props=", {...this.props});
        return true;
    }

    render() {

        console.log("render--this.props=", {...this.props});

        return (
            <div className="component-wrap">
                부모에게받은 primitiveProp = {this.props.primitiveProps}
            </div>
        )
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<AppProp>, prevState: Readonly<AppState>): any | null {
        console.log("getSnapshotBeforeUpdate--this.props=", {...this.props});
        return null;
    }

    componentDidUpdate(prevProps: Readonly<AppProp>, prevState: Readonly<AppState>, snapshot?: any): void {
        console.log("componentDidUpdate--this.props=", {...this.props});
    }
}
