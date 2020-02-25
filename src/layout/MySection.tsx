import * as React from "react";
import MyAside from "./MyAside";
import AppMain from "./AppMain";

export default class MySection extends React.Component {

    render() {
        return (
            <section>
                <MyAside></MyAside>
                <AppMain/>
            </section>
        );
    }
};
