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

export const useTest = (): TestContextType => {
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
        if (score <= 3) {
          return {
            estimatedIQ: Math.floor(Math.random() * 10) + 63, // 63-72
            interpretation: "Below average intelligence detected. Thanks for wasting your time, genius. Your score suggests you might want to consider a career that doesn't require much thinking. Maybe start with picture books and work your way up to coloring inside the lines?",
            strengths: ["Breathing (usually)", "Taking tests poorly", "Proving statistical averages exist", "Making others feel intellectually superior", "Professional disappointment generator"]
          };
        } else if (score <= 6) {
          return {
            estimatedIQ: Math.floor(Math.random() * 10) + 98, // 98-107
            interpretation: "Average intelligence confirmed. Welcome to the land of mediocrity, population: most people. Your score indicates you're perfectly ordinary—congratulations on being the human equivalent of beige paint. You're not dumb, but you're not winning any Nobel prizes either.",
            strengths: ["Following basic instructions", "Blending into crowds seamlessly", "Meeting minimum expectations", "Being adequately functional", "Master of the obvious", "Professional fence-sitter"]
          };
        } else {
          return {
            estimatedIQ: Math.floor(Math.random() * 10) + 123, // 123-132
            interpretation: "Above average cognitive abilities detected. Your score reflects strong problem-solving skills across multiple domains. Too bad this test is about as scientifically valid as a horoscope. If you thought this was a real measure of intelligence, you might want to reconsider that 'smart' label.",
            strengths: ["Pattern recognition", "Not falling for obvious traps", "Reading comprehension", "Mild superiority complex", "Overthinking simple problems", "Functional adult human"]
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
    }, 2500); // Slightly longer for more suspense
  };

  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsTestStarted(false);
    setIsTestCompleted(false);
    setIsCalculating(false);
    setTestResult(null);
  };

  const contextValue: TestContextType = {
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
  };

  return (
    <TestContext.Provider value={contextValue}>
      {children}
    </TestContext.Provider>
  );
};
