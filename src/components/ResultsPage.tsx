import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useTest } from '../contexts/TestContext';
import { Share2, Copy, RotateCcw, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { questions } from '../data/questions';
import { Badge } from '@/components/ui/badge';

const ResultsPage: React.FC = () => {
  const { testResult, resetTest, answers } = useTest();
  const { toast } = useToast();

  if (!testResult) return null;

  // Get detailed results for each question, ensuring all questions are included
  const questionResults = questions.map(question => {
    const userAnswer = answers[question.id];
    return {
      ...question,
      userAnswer: userAnswer,
      isCorrect: userAnswer === question.correctAnswer,
      wasSkipped: userAnswer === undefined || userAnswer === null
    };
  });

  // Check if any questions were skipped
  const skippedQuestions = questionResults.filter(q => q.wasSkipped).length;

  const correctCount = questionResults.filter(q => q.isCorrect).length;
  const totalQuestions = questions.length;
  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  const getIQCategory = (iq: number) => {
    if (iq >= 123) return { 
      level: "Above Average (Allegedly)", 
      color: "text-green-400", 
      emoji: "🧠",
      roast: "Look at you, big brain! Too bad this test is about as scientific as astrology."
    };
    if (iq >= 98) return { 
      level: "Painfully Average", 
      color: "text-yellow-400", 
      emoji: "😐",
      roast: "Congratulations on being the human equivalent of room temperature water."
    };
    return { 
      level: "Below Average (Ouch)", 
      color: "text-red-400", 
      emoji: "🤡",
      roast: "Don't worry, someone has to be below average. Statistics demand it."
    };
  };

  const iqInfo = getIQCategory(testResult.estimatedIQ);
  const shareText = `I just took the FakeIQ™ test and got ${correctCount}/${totalQuestions} questions right with an estimated IQ of ${testResult.estimatedIQ}! ${iqInfo.roast} Think you can do better? Try it yourself and prepare to be humbled.`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My FakeIQ™ Test Results',
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      handleCopy();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText).then(() => {
      toast({
        title: "Copied to clipboard!",
        description: "Now go embarrass yourself on social media",
      });
    });
  };

  const getPerformanceRoast = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "Wow, you actually did well. Don't let it go to your head.";
    if (percentage >= 60) return "Not terrible, but not impressive either. Very human of you.";
    if (percentage >= 40) return "You tried your best, and your best wasn't good enough.";
    return "I've seen goldfish with better problem-solving skills.";
  };

  const getTypeBadge = (type: string) => {
    const typeMap: Record<string, string> = {
      logical: 'Logical',
      numerical: 'Numerical',
      verbal: 'Verbal',
      spatial: 'Spatial',
      abstract: 'Abstract'
    };
    return typeMap[type] || type;
  };

  const getTypeColor = (type: string) => {
    const colorMap: Record<string, string> = {
      logical: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      numerical: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      verbal: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      spatial: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      abstract: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
    };
    return colorMap[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-3xl fade-in">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-2">
            Your "Intelligence" Results
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            The moment of truth has arrived
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-3 sm:pb-4">
              <CardTitle className="text-xl sm:text-2xl font-semibold">Your Score</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <div className="text-4xl sm:text-6xl font-bold text-primary">
                  {correctCount}/{totalQuestions}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {scorePercentage}% Correct
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground/70 italic">
                  {getPerformanceRoast(correctCount, totalQuestions)}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-3 sm:pb-4">
              <CardTitle className="text-xl sm:text-2xl font-semibold">IQ Estimate</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <div className={`text-4xl sm:text-6xl font-bold ${iqInfo.color}`}>
                  {testResult.estimatedIQ}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {iqInfo.level} {iqInfo.emoji}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground/70 italic">
                  {iqInfo.roast}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle>Detailed Results</CardTitle>
            <CardDescription>
              {skippedQuestions > 0 ? (
                <span className="text-amber-600 dark:text-amber-400">
                  You skipped {skippedQuestions} question{skippedQuestions > 1 ? 's' : ''}. All questions must be answered for accurate results.
                </span>
              ) : correctCount === totalQuestions ? (
                'Perfect score! Maybe this test was too easy for you.'
              ) : correctCount === 0 ? (
                'Zero correct? That takes talent.'
              ) : (
                'Pay attention to the explanations to improve.'
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {questionResults.map((q, index) => (
              <div key={q.id} className="border-b border-border/50 pb-6 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-2">
                    <Badge className={getTypeColor(q.type)}>
                      {getTypeBadge(q.type)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Question {index + 1}
                    </span>
                  </div>
                  {q.isCorrect ? (
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      <Check className="w-3 h-3 mr-1" /> Correct
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      <X className="w-3 h-3 mr-1" /> Incorrect
                    </Badge>
                  )}
                </div>
                
                <h3 className="font-medium mb-2">{q.question}</h3>
                
                <div className="space-y-2 mb-3">
                  <div className="text-sm">
                    <span className="font-medium">Your answer:</span>{' '}
                    <span className={q.isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                      {q.wasSkipped 
                        ? <span className="text-amber-600 dark:text-amber-400">Skipped</span>
                        : q.options[q.userAnswer as number]}
                    </span>
                  </div>
                  {!q.isCorrect && (
                    <div className="text-sm">
                      <span className="font-medium">Correct answer:</span>{' '}
                      <span className="text-green-600 dark:text-green-400">
                        {q.options[q.correctAnswer]}
                      </span>
                    </div>
                  )}
                </div>
                
                {q.explanation && (
                  <div className="bg-muted/50 p-3 rounded-md text-sm">
                    <p className="font-medium text-muted-foreground">Explanation:</p>
                    <p className="mt-1">{q.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <Button 
            onClick={resetTest} 
            variant="outline"
            className="w-full sm:w-auto"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <div className="flex gap-3">
            <Button 
              onClick={handleShare}
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button 
              onClick={handleCopy}
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
