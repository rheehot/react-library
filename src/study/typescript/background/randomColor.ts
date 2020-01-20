import CHARACTERS from "../random/Character";
import randomString from "../random/random";
import numberUtil from "../random/NumberUtil";

export function randomColor(): string {

    let hex: Array<string> = CHARACTERS.NUMBERS_STRING.concat("a", "b", "c", "d", "e", "f");
    let randomColor = `#${randomString.makeString(hex, 6)}`;
    return randomColor;
}

export function randomColorWrapLinearGradient() {
    const color = randomColor();
    return `linear-gradient(${color}, ${color}`;
}

export function gradationColor(colorCount: number = 4) {

    const sumColor: string = new Array(colorCount).fill("").map(() => `${randomColor()}, `).join("");
    const resultColor = sumColor.slice(0, sumColor.length - 2);

    if (colorCount > 1)
        return `linear-gradient(${numberUtil.getMinMaxNumber(1, 180)}deg, ${resultColor})`;

    else
        return `${resultColor}`;
}
