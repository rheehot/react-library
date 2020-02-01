import * as React from "react";
import MyHeader from "./MyHeader";
import MySection from "./MySection";
import MyFooter from "./MyFooter";
import {reactHeader} from "./header/ReactHeader";

interface AppProp {
}

interface AppState {
}

export default class Layout extends React.Component<AppProp, AppState> {

    render() {
        return (
            <>
                <MyHeader headerUls={reactHeader}></MyHeader>
                <MySection></MySection>
                <MyFooter></MyFooter>
            </>
        );
    }
}
