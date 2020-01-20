import NaturalNumberValidation from "./NaturalNumberValidation";
import ArgumentError from "../ArgumentError";
import Validation from "../Validation";

export default class EmptyArrayValidation extends Validation<Array<any>> {

    private static NATURAL_NUMBER_VALIDATION: Validation<number> = new NaturalNumberValidation();

    validate(array: Array<any>): Array<any> {

        try {

            EmptyArrayValidation.NATURAL_NUMBER_VALIDATION.validate(array.length);
            return array;

        }catch (e) {

            throw new ArgumentError("array must not be empty array");
        }

    }
}
