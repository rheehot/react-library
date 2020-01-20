import numberUtil from "../random/NumberUtil";

export function randomBackgroundImage(filename:string = "b"): string {

    const filePath = "/resources/images/background/";
    const fileSequence = numberUtil.getMinMaxNumber(1, 32);
    const extension = "PNG";
    return `url(${filePath}${filename}${fileSequence}.${extension})`;
}
