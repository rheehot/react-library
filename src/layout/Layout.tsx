import * as React from "react";
import {MyHeader} from "./MyHeader";
import {MySection} from "./MySection";
import {MyFooter} from "./MyFooter";
import {reactHeader} from "./header/ReactHeader";
import {cssHeader} from "./header/CssHeader";
import HeaderInfo from "./header/HeaderInfo";

interface AppProp {
}

interface AppState {
    headerUls: Array<Array<HeaderInfo>>
}

export default class Layout extends React.Component<AppProp, AppState> {

    constructor(props: AppProp) {
        super(props);

        this.state = {
            headerUls: reactHeader
        };

        this.headerChange = this.headerChange.bind(this);
    }

    headerChange(headerInfo: HeaderInfo) {
        const firstDir = headerInfo.to.split("/")[1];

        switch (firstDir) {
            case "css":
                this.setState({headerUls: cssHeader});
                break;

            default:
                this.setState({headerUls: reactHeader});
        }
    }

    render() {
        return (
            <>
                <MyHeader headerUls={this.state.headerUls} headerChange={this.headerChange}></MyHeader>
                <MySection></MySection>
                <MyFooter></MyFooter>
            </>
        );
    }
}
