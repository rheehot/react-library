import * as React from "react";
import MultiplicationTableQuizGenerator from "./MultiplicationTableQuizGenerator";
import InputAndButtonItem from "../../common/form/InputButtonItem";
import {useEffect} from "react";

export default function MultiplicationTableQuiz() {

    const quizGenerator = React.useMemo(() => new MultiplicationTableQuizGenerator(), []);
    const [quiz, setQuiz] = React.useState();

    useEffect(() => {
        setQuiz(quizGenerator.makeQuiz());
    }, []);

    const [result, setResult] = React.useState("");
    const [inputValue, setInputValue] = React.useState("");

    function changeEventHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function submit() {
        event.preventDefault();
        setResult((quizGenerator.isAnswer(inputValue)) ? "정답입니다" : "오답입니다.");
    }

    return (
        <div>
            <form className="multiplication-table-wrap" onSubmit={submit}>
                <h1>{quiz}</h1>
                <InputAndButtonItem buttonText="제출" onChangeHandler={changeEventHandler} inputValue={inputValue} onClickHandler={submit}/>
            </form>
            <span>{result}</span>
        </div>
    )
}
