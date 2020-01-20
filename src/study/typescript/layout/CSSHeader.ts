import {Header} from "./Header";
import ImageDropdown from "./ImageDropdown";
import TextDropdown from "./TextDropdown";

export default class CSSHeader implements Header {

    imageDropdownList: Array<ImageDropdown> = [
        new ImageDropdown("/css/main", "/resources/images/icons/css.png", "css-icon"),
        new ImageDropdown("/vue/main", "/resources/images/icons/vue.png", "vue-icon"),
        new ImageDropdown("/react/main", "/resources/images/icons/react.png", "react-icon"),
    ];

    squareList: Array<TextDropdown> = [
        new TextDropdown("/css/square/position", "Square"),
        new TextDropdown("/css/square/position", "Position"),
        new TextDropdown("/css/square/margin-auto", "margin-auto"),
    ];

    positionList: Array<TextDropdown> = [
        new TextDropdown("/css/position/kinds", "Position"),
        new TextDropdown("/css/position/kinds", "position 종류")
    ];

    displayList: Array<TextDropdown> = [
        new TextDropdown("/css/flex/kinds", "flex"),
        new TextDropdown("/css/flex/kinds", "flex item은 display바뀜")
    ];

    responseiveList: Array<TextDropdown> = [
        new TextDropdown("/css/responsive/form", "Responsive"),
        new TextDropdown("/css/responsive/form", "인풋박스와 버튼"),
    ];

    techniqueList: Array<TextDropdown> = [
        new TextDropdown("/css/technique/basic", "Technique"),
        new TextDropdown("/css/technique/basic", "배경색 분할")
    ];

    textDropdownLists: Array<Array<TextDropdown>> = [
        this.squareList, this.positionList, this.displayList, this.responseiveList, this.techniqueList
    ];

    stylesheet:object =  {
        background: "lightblue"
    };
}
