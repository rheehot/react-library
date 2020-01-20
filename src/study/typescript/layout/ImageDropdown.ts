import Dropdown from "./Dropdown";

export default class ImageDropdown extends Dropdown{
    readonly src: string;
    readonly alt: string;

    constructor(to: string, src: string, alt: string) {
        super(to);
        this.src = src;
        this.alt = alt;
    }
}
