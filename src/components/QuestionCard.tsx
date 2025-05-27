
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Question } from '../types/question';
import { useTest } from '../contexts/TestContext';
import ProgressBar from './ProgressBar';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, questionNumber, totalQuestions }) => {
  const { answers, answerQuestion, nextQuestion } = useTest();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(
    answers[question.id] !== undefined ? answers[question.id] : null
  );

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    answerQuestion(question.id, answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      nextQuestion();
    }
  };

  const getQuestionTypeLabel = (type: string) => {
    const labels = {
      logical: 'Logic (Good Luck)',
      numerical: 'Math (Try Not to Cry)', 
      verbal: 'Words (Hopefully You Can Read)',
      spatial: 'Visual Thinking (Use Your Brain)',
      abstract: 'Pattern Recognition (This Should Be Fun)'
    };
    return labels[type as keyof typeof labels] || type;
  };

  const getButtonText = () => {
    if (questionNumber === totalQuestions) {
      return "Submit & Face Your Fate";
    }
    return selectedAnswer !== null ? "Next Question (No Going Back)" : "Pick an Answer First, Genius";
  };

  const getSarcasticPrompts = () => {
    const prompts = [
      "Come on, it's not rocket science...",
      "Take your time, we have all day...",
      "Even my grandma could answer this faster",
      "The suspense is killing absolutely no one",
      "Channel your inner genius (if it exists)",
    ];
    return prompts[Math.floor(Math.random() * prompts.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-2xl slide-in-right">
        <ProgressBar current={questionNumber - 1} total={totalQuestions} />
        
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3 sm:pb-4">
            <div className="flex items-center justify-between mb-2 gap-2">
              <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full">
                {getQuestionTypeLabel(question.type)}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                {questionNumber} of {totalQuestions}
              </span>
            </div>
            <CardTitle className="text-lg sm:text-xl font-semibold leading-relaxed">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-3 sm:p-4 text-left rounded-lg border-2 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${
                  selectedAnswer === index
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                }`}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedAnswer === index 
                      ? 'border-primary bg-primary' 
                      : 'border-border'
                  }`}>
                    {selectedAnswer === index && (
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary-foreground"></div>
                    )}
                  </div>
                  <span className="font-medium text-sm sm:text-base leading-relaxed">{option}</span>
                </div>
              </button>
            ))}
            
            <div className="pt-4 sm:pt-6">
              <Button 
                onClick={handleNext}
                disabled={selectedAnswer === null}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base sm:text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {getButtonText()}
              </Button>
              {selectedAnswer === null && (
                <p className="text-xs sm:text-sm text-muted-foreground text-center mt-2">
                  {getSarcasticPrompts()}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuestionCard;
