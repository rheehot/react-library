import QuizGenerator from "../QuizGenerator";
import {getMinMaxNumber} from "../../../typescript/random/NumberUtil";

export default class MultiplicationTableQuizGenerator implements QuizGenerator {

    //typescript interface의 장점은 java와 달리 field도 강제할 수 있다는 것임.
    answerCache:string;
    quizCache: string;

    makeQuiz(): string {

        const num1 = getMinMaxNumber(1, 9);
        const num2 = getMinMaxNumber(1, 9);
        this.answerCache = String(num1 * num2);

        this.quizCache = `${[num1, num2].join(" * ")} = ?`;
        return this.quizCache;
    }

    isAnswer(submitAnswer: string): boolean {
        return submitAnswer === String(this.answerCache);
    }
}
