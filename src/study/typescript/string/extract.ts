import IsEnglish from "./implements/IsEnglish";
import {removeDuplicate} from "../util/arrayUtil";

export default function extract(str: string) : string {

				const isEnglish = new IsEnglish();

				const result = str.split(" ").filter( word => {

						const _word = word.replace(/ /gi, "");
						return 5 <= _word.length && _word.length <= 15 && isEnglish.isString(_word);

				});

				return removeDuplicate(result).join(" ").toLowerCase();
		}