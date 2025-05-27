
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const LoadingResults: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl fade-in">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="py-16 text-center space-y-6">
            <Loader2 className="w-16 h-16 animate-spin text-primary mx-auto" />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-primary">
                Calculating Your Intellectual Prowess...
              </h2>
              <div className="space-y-1 text-muted-foreground">
                <p>Running advanced algorithms...</p>
                <p className="text-sm">Consulting with Einstein's ghost...</p>
                <p className="text-sm">Cross-referencing with your search history...</p>
                <p className="text-sm">Preparing your ego for potential destruction...</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoadingResults;
