
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
  },
  {
    id: 6,
    type: 'logical',
    question: 'A man lives on the 20th floor of an apartment building. Every morning he takes the elevator down to the ground floor. When he comes home, he takes the elevator to the 10th floor and walks the rest... unless it\'s raining. Why?',
    options: [
      'He\'s claustrophobic after the 10th floor',
      'He\'s too short to reach the 20th floor button',
      'The elevator breaks after 10th floor',
      'He enjoys the cardio workout'
    ],
    correctAnswer: 1,
    explanation: 'He\'s too short to reach the 20th floor button, but can reach the umbrella when it\'s raining to press higher buttons. Classic lateral thinking that probably went right over your head.'
  },
  {
    id: 7,
    type: 'numerical',
    question: 'If you have 30 white socks and 18 black socks in a drawer, how many socks do you need to pull out to guarantee you have a matching pair?',
    options: ['2 socks', '3 socks', '18 socks', '30 socks'],
    correctAnswer: 1,
    explanation: 'Three socks. Worst case: you pull out one white, one black, then the third MUST match one of them. This is called the Pigeonhole Principle, which sounds more complicated than your thought process.'
  },
  {
    id: 8,
    type: 'verbal',
    question: 'What word becomes shorter when you add two letters to it?',
    options: ['Longer', 'Short', 'Word', 'Length'],
    correctAnswer: 1,
    explanation: 'The word "short" becomes "shorter" when you add "er" to it. A classic wordplay riddle that probably made you overthink basic English.'
  },
  {
    id: 9,
    type: 'spatial',
    question: 'You have a 3x3 grid. If you place X\'s in all four corners, how many ways can you place an O in the remaining spaces to create a line of 3?',
    options: ['0 ways', '1 way', '4 ways', '8 ways'],
    correctAnswer: 0,
    explanation: 'Zero ways. With X\'s in all corners, you\'ve blocked every possible line of 3 for O. Sometimes the answer is simpler than your brain wants it to be.'
  },
  {
    id: 10,
    type: 'abstract',
    question: 'A farmer has 17 sheep. All but 9 die. How many sheep are left?',
    options: ['8 sheep', '9 sheep', '0 sheep', '17 sheep'],
    correctAnswer: 1,
    explanation: 'Nine sheep are left. "All but 9 die" means all except 9 die, so 9 survive. Reading comprehension strikes again!'
  }
];
