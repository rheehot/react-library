import { EndingQuizGenerator } from "./EndingQuizGenerator";

export class EnglishEndingQuizGenerator extends EndingQuizGenerator {

    randomFirstWord(): string {

        let randomWord = "";

        for(let i = 0 ; i < 10 ; i++) {

            randomWord = randomWord.concat(String.fromCharCode(parseInt(String(Math.random() * 26)) + 97));
        }

        return randomWord;
    }

    makeQuiz(currentWord: string): string {

        this.previousWord = currentWord;
        return currentWord;
    }
}

export const englistEndingQuizGenerator = new EnglishEndingQuizGenerator();
