export default interface QuizGenerator {

    makeQuiz(): string;

    /**
     * 만약 정답을 캐싱할 필요가 있다면, answerCache에 제출한 answer를 저장하세요.
     * @param answer
     */
    isAnswer(answer: string): boolean;
}
