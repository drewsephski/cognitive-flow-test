
import React from 'react';
import { TestProvider } from '@/contexts/TestContext';
import { useTest } from '@/hooks/useTest';
import { WelcomePage } from '../components/WelcomePage';
import QuestionCard from '../components/QuestionCard';
import ResultsPage from '../components/ResultsPage';
import LoadingResults from '../components/LoadingResults';
import { questions } from '../data/questions';

const TestContent: React.FC = () => {
  const { isTestStarted, isTestCompleted, isCalculating, currentQuestion, currentQuestionIndex } = useTest();

  if (isTestCompleted) {
    return <ResultsPage />;
  }

  if (isCalculating) {
    return <LoadingResults />;
  }

  if (isTestStarted && currentQuestion) {
    return (
      <QuestionCard
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />
    );
  }

  return <WelcomePage />;
};

const Index: React.FC = () => {
  return (
    <TestProvider>
      <TestContent />
    </TestProvider>
  );
};

export default Index;
