import * as React from "react";
import QuizGenerator from "../QuizGenerator";
import MultiplicationTableQuizGenerator from "./MultiplicationTableQuizGenerator";
import {SyntheticEvent} from "react";
import InputAndButtonItem from "../../common/form/InputButtonItem";

interface AppProp {

}

interface AppState {
    quiz: string;
    result: string,
    inputValue: string
}

export default class MultiplicationTableQuiz extends React.Component<AppProp, AppState> {

    quizGenerator: QuizGenerator;

    constructor(props: any) {
        super(props);

        this.quizGenerator = new MultiplicationTableQuizGenerator();

        this.state = {
            quiz: this.quizGenerator.makeQuiz(),
            result: "",
            inputValue: ""
        };

        this.submit = this.submit.bind(this);
    }

    myChange = (event: SyntheticEvent) => {
        console.log("myChange called");
        this.setState({
            inputValue: event.target.value
        })
    };

    submit() {
        event.preventDefault();

        this.setState({
            result: (this.quizGenerator.isAnswer(this.state.inputValue)) ? "정답입니다" : "오답입니다."
        });
    }

    render() {
        return (
            <div>
                <form className="multiplication-table-wrap" onSubmit={this.submit}>
                    <h1>{this.state.quiz}</h1>
                    <InputAndButtonItem buttonText="제출" inputSetState={this.myChange}/>
                </form>
                <span>{this.state.result}</span>
            </div>
        )
    }
}
