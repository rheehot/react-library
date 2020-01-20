export interface QuizGenerator {

    /**
     * @param makeQuizArgs 퀴즈를 만드는데 필요한 매개변수
     */
    makeQuiz(...makeQuizArgs: any): string;

    /**
     * @param checkAnswerArgs 퀴즈의 정답을 체크하는데 필요한 매개변수
     */
    isAnswer(...checkAnswerArgs: any): Boolean;
}
