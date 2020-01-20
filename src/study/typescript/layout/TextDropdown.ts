import Dropdown from "./Dropdown";

export default class TextDropdown extends Dropdown{
    readonly linkText: string;

    constructor(to: string, linkText: string) {
        super(to);
        this.linkText = linkText;
    }
}
