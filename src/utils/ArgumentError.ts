//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error 참고하여 만들었습니다.

/**
 * 함수 / 메소드에서 넘겨받은 parameter가 유효하지않을 때 throw될 Error입니다.
 */
export default class ArgumentError extends Error {

    constructor(message: string) {
        super(message);

        if (Error.captureStackTrace)
            Error.captureStackTrace(this, ArgumentError);
    }
}
