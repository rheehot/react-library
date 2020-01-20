import {Header} from "./Header";
import ImageDropdown from "./ImageDropdown";
import TextDropdown from "./TextDropdown";

export default class VueHeader implements Header {

    imageDropdownList: Array<ImageDropdown> = [
        new ImageDropdown("/vue/main", "/resources/images/icons/vue.png", "vue-icon"),
        new ImageDropdown("/react/main", "/resources/images/icons/react.png", "react-icon"),
        new ImageDropdown("/css/main", "/resources/images/icons/css.png", "css-icon")
    ];

    zerochoList: Array<TextDropdown> = [
        new TextDropdown("/vue/studies/multi", "Zerocho TV"),
        new TextDropdown("/vue/studies/multi", "계산기"),
        new TextDropdown("/vue/studies/ending", "끝말잇기"),
        new TextDropdown("/vue/studies/likeButton", "좋아요버튼"),
    ];

    myList: Array<TextDropdown> = [
        new TextDropdown("/vue/my/virtual-box-example", "개인적으로 만든 컴포넌트"),
        new TextDropdown("/vue/my/virtual-box-example", "VirtualBox"),
    ];

    etcList: Array<TextDropdown> = [
        new TextDropdown("/vue/etc/scoped", "기타"),
        new TextDropdown("/vue/etc/scoped", "scoped"),
        new TextDropdown("/vue/studies/reference-lost", "자동으로값이바뀜?"),
        new TextDropdown("/vue/etc/capture-bubble", "캡쳐와 버블링"),
        new TextDropdown("/vue/etc/to-do-list", "투두리스트"),

    ];

    animationList: Array<TextDropdown> = [
        new TextDropdown("/vue/etc/alarm", "애니메이션"),
        new TextDropdown("/vue/etc/alarm", "알림"),
    ];

    textDropdownLists: Array<Array<TextDropdown>> = [
        this.zerochoList, this.myList, this.etcList, this.animationList
    ];

    stylesheet:object =  {
        background: "lightgreen"
    };
};
