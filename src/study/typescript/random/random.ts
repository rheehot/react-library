import CHARACTERS from "./Character";
import {getMinMaxNumber} from "./numberUtil";

class RandomString {

    /**
     * @param anagramArray 랜덤한 문자열을 만들 때 들어갈 요소들
     * @param length 랜덤한 문자열의 길이
     *
     * @example (['a', 'b', 'c'], 5) ==> return 'aabac'
     */
    makeString(anagramArray: Array<string | number>, length: number): string {

        let result = new Array<string>(length);

        for (let i = 0; i < length; i++) {

            let randomIndex = getMinMaxNumber(0, anagramArray.length - 1);
            result.push(String(anagramArray[randomIndex]));
        }

        return result.join("");
    }

    /**
     * @param length return받을 문자열의 길이
     * @return 정수가 랜덤하게 섞인 문자열을 반환합니다.
     * @example (3) => "106"
     */
    makeNumbers(length: number): string {
        return this.makeString(CHARACTERS.NUMBERS_STRING, length);
    }

    /**
     * @param length return받을 문자열의 길이
     * @return 자연수가 랜덤하게 섞인 문자열을 반환합니다.
     * @example (3) => "196"
     */
    makeNaturalNumbers(length: number): string {
        return this.makeString(CHARACTERS.NATURAL_NUMBERS_STRING, length);

    }

    /**
     * @param length return받을 문자열의 길이
     * @return 대문자가 랜덤하게 섞인 문자열을 반환합니다.
     * @example (3) => "XDP"
     */
    makeUpperLetters(length: number): string {
        return this.makeString(CHARACTERS.UPPER_CASE_LETTERS, length);
    }

    /**
     * @param length return받을 문자열의 길이
     * @return 소문자가 랜덤하게 섞인 문자열을 반환합니다.
     * @example (3) => "axy"
     */
    makeLowerLetters(length: number): string {
        return this.makeString(CHARACTERS.LOWER_CASE_LETTERS, length);
    }

    /**
     * @param length return받을 문자열의 길이
     * @return n소문자, 대문자가 랜덤하게 섞인 문자열을 반환합니다.
     * @example (3) => "aBy"
     */
    makeAlphabets(length: number): string {
        return this.makeString(CHARACTERS.ALPHABET_LETTERS, length);
    }
}

const randomString = new RandomString();
export default randomString;


/*

  console.log(randomString.makeAlphabets(5));
  console.log(randomString.makeLowerLetters(6));
  console.log(randomString.makeUpperLetters(7));
  console.log(randomString.makeNaturalNumbers(8));
  console.log(randomString.makeNumbers(9));
  console.log(randomString.makeString(["a", "b", "c"], 5));

 */
