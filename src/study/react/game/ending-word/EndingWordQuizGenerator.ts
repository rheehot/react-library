import QuizGenerator from "../QuizGenerator";
import randomString from "../../../typescript/random/random";

export default class EndingWordQuizGenerator implements QuizGenerator {

    private answerCache: string;
    private quizCache: string;

    isAnswer(answer: string): boolean {
        this.answerCache = (answer) ? answer : "";
        return answer.charAt(0) === this.quizCache.charAt(this.quizCache.length - 1);
    }

    makeQuiz(): string {
        const lastCharAt = (this.answerCache) ? this.answerCache.charAt(this.answerCache.length - 1) : "";
        this.quizCache = `${lastCharAt}${randomString.makeAlphabets(5)}`;
        return this.quizCache;
    }
}
