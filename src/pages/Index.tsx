
import React from 'react';
import { TestProvider, useTest } from '../contexts/TestContext';
import WelcomePage from '../components/WelcomePage';
import QuestionCard from '../components/QuestionCard';
import ResultsPage from '../components/ResultsPage';
import { questions } from '../data/questions';

const TestContent: React.FC = () => {
  const { isTestStarted, isTestCompleted, currentQuestion, currentQuestionIndex } = useTest();

  if (isTestCompleted) {
    return <ResultsPage />;
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
