
import { Question } from '../types/question';

export const questions: Question[] = [
  {
    id: 1,
    type: 'logical',
    question: 'What comes next in this sequence: 2, 6, 18, 54, ?',
    options: ['108', '162', '216', '270'],
    correctAnswer: 1,
    explanation: 'Each number is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162'
  },
  {
    id: 2,
    type: 'numerical',
    question: 'Sarah baked 24 cookies. She sold 1/6 of them in the morning and 1/4 of the remaining cookies in the afternoon. How many cookies does she have left?',
    options: ['12', '15', '18', '21'],
    correctAnswer: 1,
    explanation: 'Morning: 24 - (24÷6) = 24 - 4 = 20. Afternoon: 20 - (20÷4) = 20 - 5 = 15'
  },
  {
    id: 3,
    type: 'verbal',
    question: 'How are a BOOK and a NEWSPAPER alike?',
    options: [
      'Both are made of paper',
      'Both contain printed information',
      'Both can be folded',
      'Both are sold in stores'
    ],
    correctAnswer: 1,
    explanation: 'The most fundamental similarity is that both contain printed information for reading'
  },
  {
    id: 4,
    type: 'spatial',
    question: 'If you rotate this arrow 90 degrees clockwise, which direction will it point?',
    options: ['↑ Up', '→ Right', '↓ Down', '← Left'],
    correctAnswer: 2,
    explanation: 'An upward arrow rotated 90° clockwise points downward',
    imageUrl: '↑'
  },
  {
    id: 5,
    type: 'abstract',
    question: 'What comes next in this pattern: ○ ◐ ● ◑ ?',
    options: ['○', '◐', '●', '◑'],
    correctAnswer: 0,
    explanation: 'The pattern shows a circle filling clockwise: empty → right half → full → left half → empty'
  }
];
