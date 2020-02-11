import MinMaxValidatiom from "../validate/common/MinMaxValidatiom";
import Validation from "../validate/Validation";


/**
 * @param min 이상
 * @param max 이하
 * @return min ~ max사이에 랜덤한 숫자 1개를 반환합니다.
 * @example (1, 10) ==> 8
 */
function getMinMaxNumberFunc(min: number, max: number): number {

    return parseInt(String(Math.random() * (max - min + 1))) + min;
}

function validate(nums: { min: number; max: number }): string  {

    if (nums.min >= nums.max)
        return `min must be less than max. ${Validation.RECEIVED_PARAMETER_MESSAEG}min=${nums.min} max=${nums.max}`;

    else
        return "";
}

export const getMinMaxNumberProxy = new Proxy(getMinMaxNumberFunc, {

    apply: (target, thisArg, args) => {

        const errorMessage = validate.call(null, args);

        if(errorMessage) {
            throw Error(errorMessage);
        }

        else
            return target.apply(thisArg, args);
    }
});

class NumberUtil {

    private static readonly MIN_MAX_VALIDATION = new MinMaxValidatiom();

    /**
     * @param min 이상
     * @param max 이하
     * @return min ~ max사이에 랜덤한 숫자 1개를 반환합니다.
     * @example (1, 10) ==> 8
     */
    getMinMaxNumber(min: number, max: number): number {

        let {min: _min, max: _max} = NumberUtil.MIN_MAX_VALIDATION.validate({min, max});

        /**
         * max는 min보다 반드시 커야함.
         * 같아서도안되고 작아서도안됨.
         */

        return parseInt(String(Math.random() * (_max - _min + 1))) + _min;
    }

    /**
     * @param min 이상
     * @param max 이하
     * @return min부터 max까지 1단위로 숫자배열을 만들어서 반환합니다.
     * @example (1, 12) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
     */
    getNumberArray(min: number, max: number): Array<number> {

        let {min: _min, max: _max} = NumberUtil.MIN_MAX_VALIDATION.validate({min, max});
        /**
         * max는 min보다 반드시 커야함.
         * 같아서도안되고 작아서도안됨.
         */

        let result: Array<number> = [];

        for (let i = _min; i < _max + 1; i++)
            result.push(i);

        return result;
    }
}

export function isOddNumber(number: number):boolean {
    return number % 2 === 1;
}

export function isEvenNumber(number: number):boolean {
    return number % 2 === 0;
}

const numberUtil = new NumberUtil();
export default numberUtil;
