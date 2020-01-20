import {Header} from "./Header";
import ImageDropdown from "./ImageDropdown";
import TextDropdown from "./TextDropdown";

export default class ReactHeader implements Header {

    imageDropdownList: Array<ImageDropdown> = [
        new ImageDropdown("/react/main", "/resources/images/icons/react.png", "react-icon"),
        new ImageDropdown("/css/main", "/resources/images/icons/css.png", "css-icon"),
        new ImageDropdown("/vue/main", "/resources/images/icons/vue.png", "vue-icon")
    ];
    textDropdownLists: Array<Array<TextDropdown>> = [];
    stylesheet:object =  {
        background: "lightskyblue"
    };
}
