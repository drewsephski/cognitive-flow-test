
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTest } from '../contexts/TestContext';

const WelcomePage: React.FC = () => {
  const { startTest } = useTest();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-2xl fade-in">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            FakeIQ™
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground px-2">
            The most accurate* IQ test on the internet
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground/70 mt-2 px-2">
            *Accuracy not guaranteed. Results may vary. Side effects include inflated ego or crushing reality checks.
          </p>
        </div>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="text-xl sm:text-2xl font-semibold text-center px-2">
              Think You're Smart? Prove It.
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-primary text-center sm:text-left">What You'll Get:</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• 10 "challenging" questions (we're generous)</li>
                  <li>• A completely made-up IQ score</li>
                  <li>• Bragging rights (or eternal shame)</li>
                  <li>• The harsh truth about your intelligence</li>
                  <li>• Free therapy session via brutal feedback</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary text-center sm:text-left">Warning Label:</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• May cause existential crisis</li>
                  <li>• Results are scientifically meaningless</li>
                  <li>• Your mom might still be proud</li>
                  <li>• No refunds on shattered dreams</li>
                  <li>• Side effects include reality checks</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-secondary/50 p-3 sm:p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary text-sm sm:text-base">Rules (Because Apparently We Need Them):</h3>
              <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                <li>• No cheating (we're watching you through your webcam)</li>
                <li>• No crying when you fail spectacularly</li>
                <li>• No claiming the test is "biased" afterwards</li>
                <li>• Yes, you can share your score and embarrass yourself publicly</li>
                <li>• Your search history won't be judged (much)</li>
              </ul>
            </div>
            
            <div className="text-center pt-2 sm:pt-4">
              <Button 
                onClick={startTest}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 sm:py-4 text-base sm:text-lg font-semibold"
              >
                Let's See How Smart You Really Are
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              This test is for entertainment purposes only. If you take it seriously, congratulations—you've already failed the real intelligence test.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WelcomePage;
