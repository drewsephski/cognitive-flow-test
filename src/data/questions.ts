
import { Question } from '../types/question';

export const questions: Question[] = [
  {
    id: 1,
    type: 'logical',
    question: 'If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?',
    options: ['100 minutes', '5 minutes', '20 minutes', '1 minute'],
    correctAnswer: 1,
    explanation: 'Each machine takes 5 minutes to make 1 widget, so 100 machines still take 5 minutes to make 100 widgets (working in parallel). But you probably overthought this, didn\'t you?'
  },
  {
    id: 2,
    type: 'numerical',
    question: 'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?',
    options: ['10 cents', '5 cents', '15 cents', '20 cents'],
    correctAnswer: 1,
    explanation: 'The ball costs 5 cents, the bat costs $1.05. Most people say 10 cents because they don\'t actually think. Congratulations if you got this right, you can do basic algebra.'
  },
  {
    id: 3,
    type: 'verbal',
    question: 'What comes next in this sequence: Monday, Tuesday, Wednesday, ?',
    options: ['Thursday', 'Friday', 'Weekend', 'The existential dread of another workday'],
    correctAnswer: 0,
    explanation: 'It\'s Thursday, genius. Though if you picked the existential dread option, you get points for honesty about the human condition.'
  },
  {
    id: 4,
    type: 'spatial',
    question: 'If you fold a piece of paper in half twice, then cut a hole in the middle, how many holes will there be when you unfold it?',
    options: ['1 hole', '2 holes', '4 holes', '8 holes'],
    correctAnswer: 2,
    explanation: 'Four holes. Each fold doubles the number of holes created by your cut. Basic geometry that apparently stumps most people.'
  },
  {
    id: 5,
    type: 'abstract',
    question: 'You\'re in a race and you pass the person in 2nd place. What place are you in now?',
    options: ['1st place', '2nd place', '3rd place', 'Still losing at life'],
    correctAnswer: 1,
    explanation: 'You\'re in 2nd place now, not 1st. You passed the person who WAS in 2nd, so you took their spot. If you said 1st place, you might want to stick to easier puzzles.'
  }
];
