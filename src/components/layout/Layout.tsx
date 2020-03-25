import * as React from "react";
import {useState} from "react";
import MyHeader from "./MyHeader";
import MySection from "./MySection";
import MyFooter from "./MyFooter";
import {reactHeader} from "./header/ReactHeader";
import {cssHeader} from "./header/CssHeader";
import HeaderInfo from "./header/HeaderInfo";
import {getPathDirectoryName} from "../../utils/common/UrlUtil";
import {blackDesertHeader} from "./header/BlackDesertHeader";

export default function Layout() {

    const [headerUls, setHeaderUls] = useState(() => {

        const firstPath = getPathDirectoryName(location.pathname, 0);
        return getHeader(firstPath);
    });

    function headerChange(headerInfo: HeaderInfo) {

        const firstPath = getPathDirectoryName(headerInfo.to, 0);
        const header = getHeader(firstPath);
        setHeaderUls(header);
    }

    function getHeader(firstPath: string): Array<Array<HeaderInfo>> {

        switch (firstPath) {
            case "css":
                return cssHeader;

            case "black-desert":
                return blackDesertHeader;

            default:
                return reactHeader;
        }
    }

    return (
        <>
            <MyHeader headerUls={headerUls} headerChange={headerChange}/>
            <MySection/>
            <MyFooter/>
        </>
    );
};
