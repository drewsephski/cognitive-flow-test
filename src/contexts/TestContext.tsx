
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Question, TestResult } from '../types/question';
import { questions } from '../data/questions';

interface TestContextType {
  currentQuestionIndex: number;
  answers: Record<number, number>;
  isTestStarted: boolean;
  isTestCompleted: boolean;
  isCalculating: boolean;
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
  const [isCalculating, setIsCalculating] = useState(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const currentQuestion = isTestStarted && currentQuestionIndex < questions.length 
    ? questions[currentQuestionIndex] 
    : null;

  const startTest = () => {
    setIsTestStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsTestCompleted(false);
    setIsCalculating(false);
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
    setIsCalculating(true);
    
    // Simulate loading for dramatic effect
    setTimeout(() => {
      let score = 0;
      questions.forEach(question => {
        if (answers[question.id] === question.correctAnswer) {
          score++;
        }
      });

      const getSarcasticResults = (score: number): { estimatedIQ: number; interpretation: string; strengths: string[] } => {
        if (score <= 1) {
          return {
            estimatedIQ: Math.floor(Math.random() * 10) + 63, // 63-72
            interpretation: "Below average. Thanks for wasting your time dumbass. Your score suggests an opportunity to develop your cognitive skills. Maybe start with picture books?",
            strengths: ["Breathing (probably)", "Taking tests poorly", "Proving Darwin right", "Making others feel better about themselves"]
          };
        } else if (score <= 3) {
          return {
            estimatedIQ: Math.floor(Math.random() * 10) + 98, // 98-107
            interpretation: "Average intelligence. NPC head ah. Your score indicates a solid foundation in various cognitive areas. You're perfectly mediocre - congratulations on being forgettable!",
            strengths: ["Following basic instructions", "Blending into crowds", "Meeting minimum expectations", "Being adequately functional"]
          };
        } else {
          return {
            estimatedIQ: Math.floor(Math.random() * 10) + 123, // 123-132
            interpretation: "Your score reflects strong cognitive abilities across multiple domains. Too bad this shit isn't accurate, if you thought so, you might just be a dumbass. But hey, at least you can solve basic puzzles!",
            strengths: ["Pattern recognition", "Not falling for obvious traps", "Reading comprehension", "Mild superiority complex"]
          };
        }
      };

      const { estimatedIQ, interpretation, strengths } = getSarcasticResults(score);

      const result: TestResult = {
        score,
        totalQuestions: questions.length,
        estimatedIQ,
        interpretation,
        strengths
      };

      setTestResult(result);
      setIsCalculating(false);
      setIsTestCompleted(true);
    }, 2000); // 2 second dramatic pause
  };

  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsTestStarted(false);
    setIsTestCompleted(false);
    setIsCalculating(false);
    setTestResult(null);
  };

  return (
    <TestContext.Provider value={{
      currentQuestionIndex,
      answers,
      isTestStarted,
      isTestCompleted,
      isCalculating,
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
