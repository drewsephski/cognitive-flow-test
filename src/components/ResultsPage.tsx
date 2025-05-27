
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTest } from '../contexts/TestContext';

const ResultsPage: React.FC = () => {
  const { testResult, resetTest } = useTest();

  if (!testResult) return null;

  const getIQInterpretation = (iq: number) => {
    if (iq >= 130) return { level: "Superior", color: "text-green-400" };
    if (iq >= 120) return { level: "Above Average", color: "text-blue-400" };
    if (iq >= 110) return { level: "High Average", color: "text-primary" };
    if (iq >= 90) return { level: "Average", color: "text-yellow-400" };
    if (iq >= 80) return { level: "Low Average", color: "text-orange-400" };
    return { level: "Below Average", color: "text-red-400" };
  };

  const iqInfo = getIQInterpretation(testResult.estimatedIQ);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-2">
            Your Results
          </h1>
          <p className="text-lg text-muted-foreground">
            Assessment Complete
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">Score Summary</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-2">
                <div className="text-6xl font-bold text-primary">
                  {testResult.score}/{testResult.totalQuestions}
                </div>
                <p className="text-muted-foreground">Questions Correct</p>
              </div>
              
              <div className="space-y-2">
                <div className={`text-4xl font-bold ${iqInfo.color}`}>
                  {testResult.estimatedIQ}
                </div>
                <p className="text-muted-foreground">Estimated IQ</p>
                <p className={`font-semibold ${iqInfo.color}`}>
                  {iqInfo.level}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Cognitive Strengths</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {testResult.strengths.map((strength, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Detailed Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed text-lg">
              {testResult.interpretation}
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="bg-secondary/50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2 text-primary">Understanding Your Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <p><strong>Average IQ Range:</strong> 85-115</p>
                  <p><strong>Above Average:</strong> 115-129</p>
                  <p><strong>Superior:</strong> 130+</p>
                </div>
                <div>
                  <p><strong>Assessment Type:</strong> Cognitive Screening</p>
                  <p><strong>Questions:</strong> 5 Multi-domain</p>
                  <p><strong>Duration:</strong> 5-10 minutes</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={resetTest}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
              >
                Take Test Again
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              This assessment provides an estimate based on a limited sample and should not be considered a definitive measure of intelligence.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsPage;
