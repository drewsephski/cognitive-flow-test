
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between text-sm text-muted-foreground mb-2">
        <span>Question {current + 1} of {total}</span>
        <span>{Math.round(percentage)}% Complete</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-primary to-blue-400 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
