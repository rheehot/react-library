export default abstract class Validation<T> {

    /**
     * @param t Type of object that stores data to be validated.
     * @return Validated object
     * If the parameter is not valid, it is recommended to throw a RuntimeException such as IllegalArgumentException.
     */
    abstract validate(t: T): T;

    static readonly RECEIVED_PARAMETER_MESSAEG = `received parameter value ==> `;
}
