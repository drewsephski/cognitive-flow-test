
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
            FakeIQ™
          </h1>
          <p className="text-xl text-muted-foreground">
            The most accurate* IQ test on the internet
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            *Accuracy not guaranteed. Results may vary. Side effects include inflated ego or crushing reality checks.
          </p>
        </div>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">
              Think You're Smart? Prove It.
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">What You'll Get:</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 5 "challenging" questions</li>
                  <li>• A completely made-up IQ score</li>
                  <li>• Bragging rights (or shame)</li>
                  <li>• The harsh truth about your intelligence</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Warning:</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• May cause existential crisis</li>
                  <li>• Results are scientifically meaningless</li>
                  <li>• Your mom might still be proud</li>
                  <li>• No refunds on shattered dreams</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-secondary/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary">Rules (Because Apparently We Need Them):</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• No cheating (we're watching you)</li>
                <li>• No crying when you fail</li>
                <li>• No claiming the test is "biased" afterwards</li>
                <li>• Yes, you can share your score and embarrass yourself publicly</li>
              </ul>
            </div>
            
            <div className="text-center pt-4">
              <Button 
                onClick={startTest}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold"
              >
                Let's See How Smart You Really Are
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center">
              This test is for entertainment purposes only. If you take it seriously, that's your first mistake.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WelcomePage;
