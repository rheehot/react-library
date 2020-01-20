import QuizGenerator from "../QuizGenerator";
import Quiz from "../Quiz";
import numberUtil from "../../../typescript/random/NumberUtil";

export default class MultiplicationTableQuizGenerator implements QuizGenerator {

		//typescript interface의 장점은 java와 달리 field도 강제할 수 있다는 것임.
		answerCache = 0;
		quizCache = "";

		quizTemplate(quizSrcs: Array<string | number>): string {

				return `${quizSrcs.join(" * ")} = ?`;
		}

		makeQuiz(): Quiz {

				const num1 = numberUtil.getMinMaxNumber(1, 9);
				const num2 = numberUtil.getMinMaxNumber(1, 9);
				this.answerCache = num1 * num2;
				const quizSrcs = [num1, num2];

				const quizTitle = this.quizTemplate(quizSrcs);
				return new Quiz(quizTitle, quizSrcs);
		}

		isAnswer(quiz: Quiz): boolean {
				return quiz.submitted === String(this.answerCache);
		}
}