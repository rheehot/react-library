import * as React from "react";
import {useState} from "react";
import MyHeader from "./MyHeader";
import MySection from "./MySection";
import MyFooter from "./MyFooter";
import {reactHeader} from "./header/ReactHeader";
import {cssHeader} from "./header/CssHeader";
import HeaderInfo from "./header/HeaderInfo";

export default function Layout() {

    const [headerUls, setHeaderUls] = useState(() => {

        console.log("setState callback call");

        const firstDir = location.pathname.split("/")[1];

        switch (firstDir) {
            case "css":
                return cssHeader;

            default:
                return reactHeader;
        }
    });

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

    console.log("return");

    return (
        <>
            <MyHeader headerUls={headerUls} headerChange={headerChange}/>
            <MySection/>
            <MyFooter/>
        </>
    );
};
