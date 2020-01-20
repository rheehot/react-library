import Validation from "../Validation";
import ArgumentError from "../ArgumentError";

export default class MinMaxValidation extends Validation<{ min: number, max: number }> {

    validate(nums: { min: number; max: number }): { min: number; max: number } {

        if (nums.min >= nums.max)
            throw new ArgumentError(`min must be less than max. ${Validation.RECEIVED_PARAMETER_MESSAEG}min=${nums.min} max=${nums.max}`);

        else
            return nums;
    }
}
