import * as React from "react";
import QuizGenerator from "../QuizGenerator";
import MultiplicationTableQuizGenerator from "./MultiplicationTableQuizGenerator";
import Quiz from "../Quiz";
import FormInputButton from "../../common/responsive/FormInputButton";

interface AppProp {

}

interface AppState {
		quiz: Quiz;
		result: string
}

export default class MultiplicationTableQuiz extends React.Component<AppProp, AppState> {

		quizGenerator: QuizGenerator;

		constructor(props: any) {
				super(props);

				this.quizGenerator = new MultiplicationTableQuizGenerator();

				this.state = {
						quiz: this.quizGenerator.makeQuiz(),
						result: ""
				};

				this.submit = this.submit.bind(this);
		}

		submit() {
				event.preventDefault();

				this.setState({
						result: (this.quizGenerator.isAnswer(this.state.quiz)) ? "정답 입니다" : "오답입니다."
				});
		}

		render() {
				return (
						<div>
								<form className="multiplication-table-wrap" onSubmit={this.submit}>
										<h1>{this.state.quiz.title}</h1>
										<FormInputButton buttonText="제출"/>
								</form>
								<span>{this.state.result}</span>
						</div>
				)
		}
}