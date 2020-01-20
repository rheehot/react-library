import {QuizGenerator} from "./QuizGenerator";

export class MultiplicationTableQuizGenerator implements QuizGenerator {

    private number1: number = 0;
    private number2: number = 0;

    makeQuiz(): string {

        this.number1 = parseInt(String(Math.random() * 9 + 1));
        this.number2 = parseInt(String(Math.random() * 9 + 1));

        return `문제 : ${this.number1} * ${this.number2} = ?`;
    }

    isAnswer(result: string): boolean {

        let answer = this.number1 * this.number2;
        return parseInt(result) === answer;
    }
}

export const multiplicationTableQuizGenerator = new MultiplicationTableQuizGenerator();
