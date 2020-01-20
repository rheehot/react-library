import Quiz from "./Quiz";

export default interface QuizGenerator {

		//흐음 이 3개는 private으로 만들고싶은데, 그럼 상속이 안되는걸로 아는데?
		//그렇다고 자식클래스에서 private으로 더 범위를 좁힐수도없는노릇임..
		//그런데 이 3개는 항상 필요한게 아님. 인터페이스에서는 항상 필요없는것은 더 작은 인터페이스로 분리하라고 했음.
		quizCache: string;
		answerCache: string | number;
		quizTemplate(quizSrcs: Array<string>): string;

		makeQuiz(): Quiz;
		isAnswer(quiz: Quiz): boolean;
}