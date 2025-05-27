
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Question, TestResult } from '../types/question';
import { questions } from '../data/questions';

interface TestContextType {
  currentQuestionIndex: number;
  answers: Record<number, number>;
  isTestStarted: boolean;
  isTestCompleted: boolean;
  currentQuestion: Question | null;
  testResult: TestResult | null;
  startTest: () => void;
  answerQuestion: (questionId: number, answerIndex: number) => void;
  nextQuestion: () => void;
  calculateResults: () => void;
  resetTest: () => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const useTest = () => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};

export const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const currentQuestion = isTestStarted && currentQuestionIndex < questions.length 
    ? questions[currentQuestionIndex] 
    : null;

  const startTest = () => {
    setIsTestStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsTestCompleted(false);
    setTestResult(null);
  };

  const answerQuestion = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    let score = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });

    // Simple IQ estimation (this is not scientifically accurate)
    const baseIQ = 100;
    const scorePercentage = score / questions.length;
    const estimatedIQ = Math.round(baseIQ + (scorePercentage - 0.5) * 40);

    const getInterpretation = (score: number): { interpretation: string; strengths: string[] } => {
      if (score === 5) {
        return {
          interpretation: "Exceptional performance! You demonstrate strong analytical and problem-solving abilities across multiple cognitive domains.",
          strengths: ["Logical reasoning", "Pattern recognition", "Numerical processing", "Verbal comprehension", "Spatial visualization"]
        };
      } else if (score === 4) {
        return {
          interpretation: "Excellent cognitive performance! You show strong analytical skills with particular strengths in most areas tested.",
          strengths: ["Abstract thinking", "Problem-solving", "Pattern recognition", "Analytical reasoning"]
        };
      } else if (score === 3) {
        return {
          interpretation: "Good cognitive performance! You demonstrate solid problem-solving abilities with room for continued growth.",
          strengths: ["Logical thinking", "Basic reasoning", "Pattern identification"]
        };
      } else if (score === 2) {
        return {
          interpretation: "Fair performance. You show some cognitive strengths but may benefit from practicing analytical thinking exercises.",
          strengths: ["Basic problem-solving", "Some pattern recognition"]
        };
      } else {
        return {
          interpretation: "This suggests areas for improvement in analytical thinking. Consider practicing logic puzzles and problem-solving exercises.",
          strengths: ["Room for growth in all areas"]
        };
      }
    };

    const { interpretation, strengths } = getInterpretation(score);

    const result: TestResult = {
      score,
      totalQuestions: questions.length,
      estimatedIQ: Math.max(70, Math.min(150, estimatedIQ)),
      interpretation,
      strengths
    };

    setTestResult(result);
    setIsTestCompleted(true);
  };

  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsTestStarted(false);
    setIsTestCompleted(false);
    setTestResult(null);
  };

  return (
    <TestContext.Provider value={{
      currentQuestionIndex,
      answers,
      isTestStarted,
      isTestCompleted,
      currentQuestion,
      testResult,
      startTest,
      answerQuestion,
      nextQuestion,
      calculateResults,
      resetTest
    }}>
      {children}
    </TestContext.Provider>
  );
};
