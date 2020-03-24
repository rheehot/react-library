import {getNumberArray} from "./numberUtil";

class Character {

    //1부터 9까지
    readonly NATURAL_NUMBERS: Array<number> = getNumberArray(1, 9);

    //1부터 9까지
    readonly NATURAL_NUMBERS_STRING: Array<string> = this.NATURAL_NUMBERS.map(val => String(val));

    //0부터 9까지
    readonly NUMBERS: Array<number> = [0].concat(this.NATURAL_NUMBERS);

    //0부터 9까지
    readonly NUMBERS_STRING: Array<string> = ["0"].concat(this.NATURAL_NUMBERS_STRING);

    //F1부터 F12까지
    readonly F_KEYS: Array<string> = getNumberArray(1, 12).map(val => `F${String(val)}`);

    //방향키 4개
    readonly ARROW_KEYS = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    private readonly _FOR_SHORT_CUTS_KEYS = ["Shift", "Control", "Alt", "Home", "End", "PageUp", "PageDown"];
    private readonly _FOR_INPUT_KEYS = ["Tab", "CapsLock", "Enter", "Backspace", "Insert", "Delete"];
    //특수키
    readonly SPECIAL_KEYS = ["Escape", "NumLock", "ScrollLock", "Pause", "Meta", "ContextMenu"]
        .concat(this.ARROW_KEYS).concat(this.F_KEYS).concat(this._FOR_INPUT_KEYS).concat(this._FOR_SHORT_CUTS_KEYS);

    //대문자 아스키코드값들
    readonly UPPER_CASE_LETTER_CODES: Array<number> = getNumberArray(65, 90);

    //소문자 아스키코드값들
    readonly LOWER_CASE_LETTER_CODES: Array<number> = this.UPPER_CASE_LETTER_CODES.map(val => val + 32);

    //대소문자 아스키코드값들
    readonly ALPHABET_CODES: Array<number> = this.UPPER_CASE_LETTER_CODES.concat(this.LOWER_CASE_LETTER_CODES);

    //대문자
    readonly UPPER_CASE_LETTERS: Array<string> = this.UPPER_CASE_LETTER_CODES.map(val => String.fromCharCode(val));

    //소문자
    readonly LOWER_CASE_LETTERS: Array<string> = this.UPPER_CASE_LETTERS.map(val => val.toLowerCase());

    //대소문자
    readonly ALPHABET_LETTERS: Array<string> = this.LOWER_CASE_LETTERS.concat(this.UPPER_CASE_LETTERS);

    //일반적으로 입력하는 특수문자들
    readonly GENERAL_SPECIAL_LETTERS: Array<string> =
        ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "\\", "|", "-", "+", "/", ",", ".", "<", ">", "?",
            "\"", ":", ";", "_", "="];
}

const CHARACTERS = new Character();
export default CHARACTERS;
