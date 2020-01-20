export default class Quiz {
    readonly title: string = "";
    readonly srcs: Array<string | number> = [""];
    submitted: string = "";

    constructor(quiz: string, srcs: Array<string | number>) {
        this.title = quiz;
        this.srcs = srcs;
    }
}

/*
음 이건 그냥 DTO 느낌이야... 객체라고 보기 어려움..
quizGenerator하고 이거하고 무슨차이인지 잘 모르곘어..역할분담을 좀 잘못한거같음.
 */
