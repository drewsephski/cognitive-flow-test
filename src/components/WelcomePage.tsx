
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTest } from '../contexts/TestContext';

const WelcomePage: React.FC = () => {
  const { startTest } = useTest();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl fade-in">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-4">
            CognitiveVibe
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover your cognitive strengths through our quick 5-question assessment
          </p>
        </div>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">
              Welcome to Your Cognitive Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">What You'll Experience:</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 5 carefully crafted questions</li>
                  <li>• Multiple cognitive domains</li>
                  <li>• Estimated IQ score</li>
                  <li>• Personal insights</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Test Domains:</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Logical Reasoning</li>
                  <li>• Numerical Processing</li>
                  <li>• Verbal Comprehension</li>
                  <li>• Spatial Visualization</li>
                  <li>• Abstract Pattern Recognition</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-secondary/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary">Instructions:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Take your time to read each question carefully</li>
                <li>• Select the answer that best fits the problem</li>
                <li>• You cannot go back to previous questions</li>
                <li>• Complete all 5 questions to see your results</li>
              </ul>
            </div>
            
            <div className="text-center pt-4">
              <Button 
                onClick={startTest}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold"
              >
                Start Your Assessment
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center">
              This is an educational tool and not a substitute for professional cognitive assessment.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WelcomePage;
