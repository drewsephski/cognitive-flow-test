
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTest } from '../contexts/TestContext';
import { Share2, Copy, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ResultsPage: React.FC = () => {
  const { testResult, resetTest } = useTest();
  const { toast } = useToast();

  if (!testResult) return null;

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

  const shareText = `I just took the FakeIQ™ test and got ${testResult.score}/${testResult.totalQuestions} questions right with an estimated IQ of ${testResult.estimatedIQ}! ${iqInfo.roast} Think you can do better? Try it yourself and prepare to be humbled.`;

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

  const getPerformanceRoast = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "Wow, you actually did well. Don't let it go to your head.";
    if (percentage >= 60) return "Not terrible, but not impressive either. Very human of you.";
    if (percentage >= 40) return "You tried your best, and your best wasn't good enough.";
    return "I've seen goldfish with better problem-solving skills.";
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-3 sm:pb-4">
              <CardTitle className="text-xl sm:text-2xl font-semibold">Your Score</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <div className="text-4xl sm:text-6xl font-bold text-primary">
                  {testResult.score}/{testResult.totalQuestions}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">Questions Correct</p>
                <p className="text-xs sm:text-sm text-muted-foreground/70 italic">
                  {getPerformanceRoast(testResult.score, testResult.totalQuestions)}
                </p>
              </div>
              
              <div className="space-y-2">
                <div className={`text-3xl sm:text-4xl font-bold ${iqInfo.color} flex items-center justify-center gap-2`}>
                  <span>{iqInfo.emoji}</span>
                  <span>{testResult.estimatedIQ}</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">Fake IQ Score</p>
                <p className={`font-semibold ${iqInfo.color} text-sm sm:text-base`}>
                  {iqInfo.level}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-xl sm:text-2xl font-semibold">Your "Strengths"</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 sm:space-y-3">
                {testResult.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-foreground leading-relaxed">{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm mb-4 sm:mb-6">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="text-xl sm:text-2xl font-semibold">The Brutal Truth</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-lg text-foreground leading-relaxed mb-3">
              {testResult.interpretation}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground italic">
              {iqInfo.roast}
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="pt-4 sm:pt-6">
            <div className="bg-secondary/50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
              <h3 className="font-semibold mb-2 text-primary text-sm sm:text-base">Disclaimer (The Fine Print Nobody Reads)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <div className="space-y-1">
                  <p><strong>Accuracy:</strong> Questionable at best</p>
                  <p><strong>Scientific Validity:</strong> Zero to negative</p>
                  <p><strong>Entertainment Value:</strong> Priceless</p>
                  <p><strong>Ego Damage:</strong> Potentially severe</p>
                </div>
                <div className="space-y-1">
                  <p><strong>Questions:</strong> 10 Random Brain Teasers</p>
                  <p><strong>Duration:</strong> Long enough to judge you</p>
                  <p><strong>Refund Policy:</strong> You get what you pay for</p>
                  <p><strong>Therapy Coverage:</strong> Not included</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Button 
                onClick={handleShare}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-sm sm:text-base"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Your Fake Intelligence
              </Button>
              <Button 
                onClick={handleCopy}
                variant="outline"
                className="flex-1 py-3 text-sm sm:text-base"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Results
              </Button>
            </div>

            <div className="text-center">
              <Button 
                onClick={resetTest}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Take This Joke Again
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center mt-3 sm:mt-4 leading-relaxed px-2">
              Remember: Real intelligence is knowing this test is meaningless. If you're sharing this score unironically, we have some bad news for you... but hey, at least you're consistent!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsPage;
