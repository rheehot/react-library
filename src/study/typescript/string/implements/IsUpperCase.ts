import IsCharacter from "../interface/IsCharacter";
import IsString from "../interface/IsString";
import CHARACTERS from "../../random/Character";

export default class IsUpperCase implements IsCharacter, IsString {

		isCharacter(ch: string): boolean {
				return CHARACTERS.UPPER_CASE_LETTERS.includes(ch);
		}

		isString(str: string): boolean {

				const that = this;
				return str.split("").filter(ch => that.isCharacter(ch)).length === str.length;
		}
}