import QuizGenerator from "../QuizGenerator";
import Quiz from "../Quiz";
import randomString from "../../../typescript/random/random";

export default class EndingWordQuizGenerator implements QuizGenerator {

    answerCache: string;
    quizCache: Quiz;

    isAnswer(answer: string): boolean {
        this.answerCache = (answer) ? answer : "";
        return answer.charAt(0) === this.quizCache.title.charAt(this.quizCache.title.length - 1);
    }

    makeQuiz(): Quiz {
        const lastCharAt = (this.answerCache) ? this.answerCache.charAt(this.answerCache.length - 1) : "";
        const title = `${lastCharAt}${randomString.makeAlphabets(5)}`;
        this.quizCache = new Quiz(title);
        return this.quizCache;
    }

    quizTemplate(quizSrcs: Array<string>): string {
        return "";
    }

}
