import MinMaxValidatiom from "../validate/common/MinMaxValidatiom";
import Validation from "../validate/Validation";
import ArgumentError from "../validate/ArgumentError";


/**
 * @param min 이상
 * @param max 이하
 * @return min ~ max사이에 랜덤한 숫자 1개를 반환합니다.
 * @example (1, 10) ==> 8
 */
function _getMinMaxNumber(min: number, max: number): number {

    return parseInt(String(Math.random() * (max - min + 1))) + min;
}

/**
 * 유효성 검증하는 코드를 별도의 함수로 분리하는것은 의미가 있음.
 * 다른 proxy에서 동일한 유효성 검증이 필요할 경우 proxy마다 돌려쓸 수 있으니까.
 * 하지만 유효성검증 코드가 proxy에 들어가는 순간 다른 proxy에서 똑같은 유효성검증이 필요할 때 똑같은 코드가 들어가게 될 것
 */
function mustBeLessCheck(min: number, max: number)  {

    if (min >= max)
        throw new ArgumentError(`min must be less than max. ${Validation.RECEIVED_PARAMETER_MESSAEG}min=${min} max=${max}`);
}

/**
 * @param min 이상
 * @param max 이하
 * @return min ~ max사이에 랜덤한 숫자 1개를 반환합니다.
 * @example (1, 10) ==> 8
 */
export const getMinMaxNumber = new Proxy(_getMinMaxNumber, {

    apply: (target, thisArg, args) => {

        mustBeLessCheck.apply(null, args);

        return target.apply(thisArg, args);
    }
});

class NumberUtil {

    private static readonly MIN_MAX_VALIDATION = new MinMaxValidatiom();

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
