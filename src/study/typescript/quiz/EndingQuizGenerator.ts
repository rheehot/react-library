import {QuizGenerator} from "./QuizGenerator";

export abstract class EndingQuizGenerator implements QuizGenerator {

    protected previousWord: string = "";

    isAnswer(currentWord: string) {

        if(currentWord === this.previousWord)
            return false;

        return this.previousWord.charAt(this.previousWord.length - 1) === currentWord.charAt(0);
    }

    abstract randomFirstWord(): string;

    abstract makeQuiz(currentWord: string): string;
}
