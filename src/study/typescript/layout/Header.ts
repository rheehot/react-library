import ImageDropdown from "./ImageDropdown";
import TextDropdown from "./TextDropdown";
import CSSHeader from "./CSSHeader";
import ReactHeader from "./ReactHeader";
import VueHeader from "./VueHeader";

export interface Header {
    imageDropdownList: Array<ImageDropdown>;
    textDropdownLists: Array<Array<TextDropdown>>;
    stylesheet: object;
}

export function getHeader(pathname: string): Header {

    const rootPathname = pathname.split("/")[1];

    switch (rootPathname) {
        case "css":
            return new CSSHeader();

        case "react":
            return new ReactHeader();

        default:
            return new VueHeader();
    }
}
