
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTest } from '../contexts/TestContext';
import { Share2, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ResultsPage: React.FC = () => {
  const { testResult, resetTest } = useTest();
  const { toast } = useToast();

  if (!testResult) return null;

  const getIQCategory = (iq: number) => {
    if (iq >= 123) return { level: "Above Average (Allegedly)", color: "text-green-400", emoji: "🧠" };
    if (iq >= 98) return { level: "Painfully Average", color: "text-yellow-400", emoji: "😐" };
    return { level: "Below Average (Ouch)", color: "text-red-400", emoji: "🤡" };
  };

  const iqInfo = getIQCategory(testResult.estimatedIQ);

  const shareText = `I just took the FakeIQ™ test and got ${testResult.score}/${testResult.totalQuestions} questions right with an estimated IQ of ${testResult.estimatedIQ}! Think you can do better? Try it yourself and prepare to be humbled.`;

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
      // Fallback to copy to clipboard
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-2">
            Your "Intelligence" Results
          </h1>
          <p className="text-lg text-muted-foreground">
            The moment of truth has arrived
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">Your Score</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-2">
                <div className="text-6xl font-bold text-primary">
                  {testResult.score}/{testResult.totalQuestions}
                </div>
                <p className="text-muted-foreground">Questions Correct</p>
              </div>
              
              <div className="space-y-2">
                <div className={`text-4xl font-bold ${iqInfo.color} flex items-center justify-center gap-2`}>
                  <span>{iqInfo.emoji}</span>
                  <span>{testResult.estimatedIQ}</span>
                </div>
                <p className="text-muted-foreground">Fake IQ Score</p>
                <p className={`font-semibold ${iqInfo.color}`}>
                  {iqInfo.level}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Your "Strengths"</CardTitle>
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
            <CardTitle className="text-2xl font-semibold">The Brutal Truth</CardTitle>
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
              <h3 className="font-semibold mb-2 text-primary">Disclaimer (The Fine Print Nobody Reads)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <p><strong>Accuracy:</strong> Questionable at best</p>
                  <p><strong>Scientific Validity:</strong> Zero</p>
                  <p><strong>Entertainment Value:</strong> Priceless</p>
                </div>
                <div>
                  <p><strong>Questions:</strong> 5 Random Brain Teasers</p>
                  <p><strong>Duration:</strong> Long enough to judge you</p>
                  <p><strong>Refund Policy:</strong> You get what you pay for</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                onClick={handleShare}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Your Fake-Ass IQ Score
              </Button>
              <Button 
                onClick={handleCopy}
                variant="outline"
                className="flex-1 py-3"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Results
              </Button>
            </div>

            <div className="text-center">
              <Button 
                onClick={resetTest}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
              >
                Take This Joke Again
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              Remember: Real intelligence is knowing this test is meaningless. 
              If you're sharing this score unironically, we have some bad news for you...
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsPage;
