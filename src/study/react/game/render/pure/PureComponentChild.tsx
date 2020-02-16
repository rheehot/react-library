import * as React from "react";
import MyButton from "../../../common/form/MyButton";

interface AppProp {

}

interface AppState {
    childState: Array<number>
}

export default class PureComponentChild extends React.Component<AppProp, AppState> {

    constructor(props: AppProp) {
        super(props);

        this.referenceChange = this.referenceChange.bind(this);
    }

    referenceChange() {

    }

    render() {
        return (
            <div className="component-wrap">
                Child Component
                <MyButton onClickHandler={}></MyButton>
            </div>
        )
    }
}
