
export interface Question {
  id: number;
  type: 'logical' | 'numerical' | 'verbal' | 'spatial' | 'abstract';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  imageUrl?: string;
}

export interface TestResult {
  score: number;
  totalQuestions: number;
  estimatedIQ: number;
  interpretation: string;
  strengths: string[];
}
