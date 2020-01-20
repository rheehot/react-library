import numberUtil from "./NumberUtil";
import CHARACTERS from "./Character";
import Validation from "../validate/Validation";
import NaturalNumberValidation from "../validate/common/NaturalNumberValidation";
import EmptyArrayValidation from "../validate/common/EmptyArrayValidation";

class RandomString {

    private static readonly MIN_1: Validation<number> = new NaturalNumberValidation();
    private static readonly ARRAY_LENGTH_MIN_1: Validation<Array<any>> = new EmptyArrayValidation();

    /**
     * @param anagramArray 랜덤한 문자열을 만들 때 들어갈 요소들
     * @param length 랜덤한 문자열의 길이
     *
     * @example (['a', 'b', 'c'], 5) ==> return 'aabac'
     */
    makeString(anagramArray: Array<string | number>, length: number): string {

        let _array = RandomString.ARRAY_LENGTH_MIN_1.validate(anagramArray);
        let _length = RandomString.MIN_1.validate(length);

        let result = new Array<string>(_length);

        for(let i = 0 ; i < _length ; i++ ) {

            let randomIndex = numberUtil.getMinMaxNumber(0, _array.length - 1);
            result.push(String(_array[randomIndex]));
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
