class ErrorResponse {
    private _errorCode: string;
    private _errorMessage: string;

    constructor(errorCode: string, errorMessage: string) {
        this._errorCode = errorCode;
        this._errorMessage = errorMessage;
    }

    get errorCode(): string {
        return this._errorCode;
    }

    get errorMessage(): string {
        return this._errorMessage;
    }
}

async function myExecutor() {

    console.log("myExecutor 종료");
    // reject({message: "hello"});
    // return new Quiz("title", "message", function () {return "function"});
    return Promise.reject(new ErrorResponse("에러코드", "error내용"))
}

export const test = function () {

    //요 자리에 Quiz에 있는 property를 넣으면 됨.
    myExecutor().then(({title}) => {

        console.log("then called");
        console.log(`resolve param = ${title}`);

    }).catch((reject: ErrorResponse) => {

        console.log("catch called");
        console.log(`reject param = ${reject.errorMessage}`);

    }).finally(() => {
        console.log("finally called");
    });
};
