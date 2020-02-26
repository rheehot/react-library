import * as React from "react";
import {MyHeader} from "./MyHeader";
import {MySection} from "./MySection";
import {MyFooter} from "./MyFooter";
import {reactHeader} from "./header/ReactHeader";
import {cssHeader} from "./header/CssHeader";
import HeaderInfo from "./header/HeaderInfo";


export const Layout = () => {

    const [headerUls, setHeaderUls] = React.useState(reactHeader);

    const headerChange = (headerInfo: HeaderInfo) => {

        const firstDir = headerInfo.to.split("/")[1];

        switch (firstDir) {
            case "css":
                setHeaderUls(cssHeader);
                break;

            default:
                setHeaderUls(reactHeader);
        }
    };

    return (
        <>
            <MyHeader headerUls={headerUls} headerChange={headerChange}></MyHeader>
            <MySection></MySection>
            <MyFooter></MyFooter>
        </>
    );
};
