import { Question, TestResult } from './question';

export type AnswersMap = Record<number, number | undefined>;

export interface TestContextType {
  currentQuestionIndex: number;
  answers: AnswersMap;
  isTestStarted: boolean;
  isTestCompleted: boolean;
  isCalculating: boolean;
  currentQuestion: Question | null;
  testResult: TestResult | null;
  startTest: () => void;
  answerQuestion: (questionId: number, answerIndex: number | null) => void;
  nextQuestion: () => void;
  calculateResults: () => void;
  resetTest: () => void;
  allQuestionsAnswered: () => boolean;
}
