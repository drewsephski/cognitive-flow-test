import React, { createContext, useState, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';
import { questions } from '../data/questions';
import { Question, TestResult } from '../types/question';
import { TestContextType, AnswersMap } from '../types/test';

const TestContext = createContext<TestContextType | undefined>(undefined);

export { TestContext };

export const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswersMap>({});
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

  const answerQuestion = (questionId: number, answerIndex: number | null) => {
    // Only update if answerIndex is a valid number
    if (answerIndex !== null && answerIndex >= 0) {
      setAnswers(prev => ({
        ...prev,
        [questionId]: answerIndex
      }));
    } else {
      // If answer is invalid, remove it from the answers
      const newAnswers = { ...answers };
      delete newAnswers[questionId];
      setAnswers(newAnswers);
    }
  };

  const nextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const hasAnswered = answers[currentQuestion.id] !== undefined;

    if (!hasAnswered) {
      // Show error toast
      toast({
        title: 'Answer Required',
        description: 'Please select an answer before proceeding.',
        variant: 'destructive',
      });
      return;
    }

    // Show explanation toast
    const isCorrect = answers[currentQuestion.id] === currentQuestion.correctAnswer;
    toast({
      title: isCorrect ? 'Correct! 🎉' : 'Incorrect',
      description: currentQuestion.explanation || 'No explanation available.',
      variant: isCorrect ? 'default' : 'destructive',
      duration: 5000, // 5 seconds
    });

    // Move to next question or calculate results
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  // Add function to check if all questions are answered
  const allQuestionsAnswered = () => {
    return questions.every(question => answers[question.id] !== undefined);
  };

  const calculateResults = () => {
    if (!allQuestionsAnswered()) {
      toast({
        title: 'Answer Required',
        description: 'Please answer all questions before submitting.',
        variant: 'destructive',
      });
      return;
    }

    setIsCalculating(true);

    // Simulate loading for dramatic effect
    setTimeout(() => {
      let score = 0;
      questions.forEach(question => {
        const userAnswer = answers[question.id];
        if (userAnswer === question.correctAnswer) {
          score++;
        }
      });

      const getSarcasticResults = (score: number): { estimatedIQ: number; interpretation: string; strengths: string[] } => {
        const percentage = (score / questions.length) * 100;
        
        if (percentage >= 98) {
          return {
            estimatedIQ: Math.floor(Math.random() * 11) + 140, // 140-150 (Top 0.1%)
            interpretation: "Genius-level intelligence detected. Your score is in the top 0.1% of test-takers. You're officially too smart for this test. Maybe try solving world hunger or something?",
            strengths: ["Exceptional problem-solving", "Advanced pattern recognition", "Rapid learning ability", "Making others feel intellectually inadequate", "Overthinking everything"]
          };
        } else if (percentage >= 95) {
          return {
            estimatedIQ: Math.floor(Math.random() * 10) + 130, // 130-139 (Top 2%)
            interpretation: "Superior intelligence confirmed. Your score places you in the top 2% of the population. You're officially smarter than 49 out of 50 people. Try not to let it go to your head.",
            strengths: ["Advanced analytical skills", "Quick learning", "Complex problem-solving", "Making connections others miss", "Occasional bouts of impostor syndrome"]
          };
        } else if (percentage >= 90) {
          return {
            estimatedIQ: Math.floor(Math.random() * 10) + 120, // 120-129 (Top 10%)
            interpretation: "High average to superior intelligence detected. You're in the top 10% of test-takers. Not quite genius material, but you can probably figure out IKEA furniture without the instructions.",
            strengths: ["Strong reasoning skills", "Good memory", "Learning new concepts quickly", "Understanding complex ideas", "Occasional overconfidence"]
          };
        } else if (percentage >= 75) {
          return {
            estimatedIQ: Math.floor(Math.random() * 10) + 110, // 110-119 (Top 25%)
            interpretation: "Above average intelligence confirmed. You're smarter than about 75% of the population. You probably did well in school without trying too hard, but don't get cocky.",
            strengths: ["Solid reasoning ability", "Good problem-solving", "Learning from experience", "Practical intelligence", "Average at being above average"]
          };
        } else if (percentage >= 50) {
          return {
            estimatedIQ: Math.floor(Math.random() * 10) + 95, // 95-104 (Average)
            interpretation: "Firmly in the average range. You're the statistical norm, the bell curve's best friend. Most people are right here with you, so at least you're not alone in your mediocrity.",
            strengths: ["Basic reasoning", "Everyday problem-solving", "Following instructions", "Blending in with the crowd", "Being perfectly ordinary"]
          };
        } else if (percentage >= 25) {
          return {
            estimatedIQ: Math.floor(Math.random() * 10) + 85, // 85-94 (Below Average)
            interpretation: "Low average intelligence detected. You might struggle with complex concepts, but hey, someone has to make the rest of us look good. On the bright side, you're probably really good at something that doesn't involve standardized tests.",
            strengths: ["Simple tasks", "Concrete thinking", "Following clear instructions", "Not overcomplicating things", "Being happy with simple pleasures"]
          };
        } else {
          return {
            estimatedIQ: Math.floor(Math.random() * 10) + 70, // 70-79 (Borderline)
            interpretation: "Below average cognitive abilities detected. The good news is you made it this far in the test. The bad news is... well, let's just say you might want to stick to tasks that don't require much thinking. Ever considered a career in professional couch testing?",
            strengths: ["Breathing (usually)", "Taking tests poorly", "Proving statistical averages exist", "Making others feel better about themselves", "Finding creative ways to avoid thinking"]
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

  return (
    <TestContext.Provider
      value={{
        currentQuestionIndex,
        answers,
        isTestStarted,
        isTestCompleted,
        isCalculating,
        currentQuestion: currentQuestion as Question,
        testResult,
        startTest,
        answerQuestion,
        nextQuestion,
        calculateResults,
        resetTest,
        allQuestionsAnswered
      }}
    >
      {children}
    </TestContext.Provider>
  );
};
