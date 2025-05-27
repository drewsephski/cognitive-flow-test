
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
      logical: 'Logical Reasoning',
      numerical: 'Numerical Reasoning', 
      verbal: 'Verbal Reasoning',
      spatial: 'Spatial Reasoning',
      abstract: 'Abstract Reasoning'
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl slide-in-right">
        <ProgressBar current={questionNumber - 1} total={totalQuestions} />
        
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {getQuestionTypeLabel(question.type)}
              </span>
              <span className="text-sm text-muted-foreground">
                Question {questionNumber}
              </span>
            </div>
            <CardTitle className="text-xl font-semibold leading-relaxed">
              {question.question}
            </CardTitle>
            {question.imageUrl && question.type === 'spatial' && (
              <div className="flex justify-center my-6">
                <div className="text-6xl font-bold text-primary">
                  {question.imageUrl}
                </div>
              </div>
            )}
            {question.type === 'abstract' && (
              <div className="flex justify-center my-6 space-x-2">
                <span className="text-3xl">○</span>
                <span className="text-3xl">◐</span>
                <span className="text-3xl">●</span>
                <span className="text-3xl">◑</span>
                <span className="text-3xl text-primary">?</span>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:scale-[1.02] ${
                  selectedAnswer === index
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index 
                      ? 'border-primary bg-primary' 
                      : 'border-border'
                  }`}>
                    {selectedAnswer === index && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
            
            <div className="pt-6">
              <Button 
                onClick={handleNext}
                disabled={selectedAnswer === null}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
              >
                {questionNumber === totalQuestions ? 'Complete Test' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuestionCard;
