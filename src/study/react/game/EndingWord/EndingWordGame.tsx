import * as React from "react";
import EndingWordQuizGenerator from "./EndingWordQuizGenerator";
import QuizGenerator from "../QuizGenerator";
import FormInputButton from "../../common/responsive/FormInputButton";
import {SyntheticEvent} from "react";

interface AppProp {

}

interface AppState {
    quiz: string,
    result: string,
    inputValue:string
}

export default class EndingWordGame extends React.Component<AppProp, AppState> {

    endingGameQuizGenerator: QuizGenerator = new EndingWordQuizGenerator();

    constructor(props: any) {
        super(props);

        this.state = {
            quiz: this.endingGameQuizGenerator.makeQuiz().title,
            result: "",
            inputValue: ""
        }
    }

    submit = () => {

        event.preventDefault();

        const answer = this.endingGameQuizGenerator.isAnswer(this.state.inputValue);

        this.setState({
            result: (answer) ? "" : "오답입니다."
        });

        if(answer) {
            this.setState({
                quiz: this.endingGameQuizGenerator.makeQuiz().title
            });
        }

    };

    myChange = (event: SyntheticEvent) => {

        this.setState({
            inputValue: event.target.value
        });
    };

    render() {
        return (
            <form className="component-wrap" onSubmit={this.submit}>
                <h1>{this.state.quiz}</h1>
                <FormInputButton buttonText="제출" inputSetState={this.myChange}/>
                <span>{this.state.result}</span>
            </form>
        )
    }
}
