import Validation from "../Validation";
import ArgumentError from "../ArgumentError";

export default class NaturalNumberValidation extends Validation<number> {

    private static readonly _MUST_BE_NATURAL_NUMBER = "반드시 자연수여야 합니다.";

    /**
     * @param num
     * @return validated num이 자연수일 경우 그대로 반환됩니다.
     * @throws ArgumentError num이 자연수가 아닐경우 (0이거나 음수이거나 소수일경우) 반한됩니다.
     */
    validate(num: number): number {

        if(!Number.isInteger(num)) {

            throw new ArgumentError(`${NaturalNumberValidation._MUST_BE_NATURAL_NUMBER} ${Validation.RECEIVED_PARAMETER_MESSAEG}${num}`);

        } else if(num === 0) {

            throw new ArgumentError(`${NaturalNumberValidation._MUST_BE_NATURAL_NUMBER} ${Validation.RECEIVED_PARAMETER_MESSAEG}${num}`);

        } else if(num < 0) {

            throw new ArgumentError(`${NaturalNumberValidation._MUST_BE_NATURAL_NUMBER} ${Validation.RECEIVED_PARAMETER_MESSAEG}${num}`);

        } else {

            return num;
        }
    }
}
