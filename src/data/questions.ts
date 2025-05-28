import { Question } from '../types/question';

export const questions: Question[] = [
  {
    id: 0,
    type: 'logical',
    question: 'If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?',
    options: ['True', 'False', 'Maybe', 'Not enough information'],
    correctAnswer: 0,
    explanation: 'This is a classic syllogism. If A is a subset of B, and B is a subset of C, then A must be a subset of C.'
  },
  {
    id: 1,
    type: 'numerical',
    question: 'If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?',
    options: ['5 minutes', '10 minutes', '50 minutes', '100 minutes'],
    correctAnswer: 0,
    explanation: 'Each machine takes 5 minutes to make one widget. So 100 machines would take 5 minutes to make 100 widgets (1 widget per machine).'
  },
  {
    id: 3,
    type: 'verbal',
    question: 'Which word does NOT belong with the others?',
    options: ['Book', 'Paper', 'Pencil', 'Teacher'],
    correctAnswer: 3,
    explanation: 'All other items are objects, while Teacher is a person.'
  },
  {
    id: 4,
    type: 'spatial',
    question: 'If you rotate a 2D letter "N" 180 degrees, which letter does it resemble?',
    options: ['Z', 'N', 'S', 'M'],
    correctAnswer: 1,
    explanation: 'The letter N rotated 180 degrees looks like another N.'
  },
  {
    id: 5,
    type: 'numerical',
    question: 'If the code for CAT is 3120, what is the code for DOG?',
    options: ['4157', '467', '1234', '5678'],
    correctAnswer: 1,
    explanation: 'Each letter corresponds to its position in the alphabet (C=3, A=1, T=20). D=4, O=15, G=7.'
  },
  {
    id: 6,
    type: 'logical',
    question: 'If some Smaugs are Thors and no Thors are Thrains, then no Smaugs are Thrains. This statement is:',
    options: ['True', 'False', 'Maybe', 'Inconclusive'],
    correctAnswer: 3,
    explanation: 'The premises do not provide enough information to determine the relationship between Smaugs and Thrains.'
  },
  {
    id: 7,
    type: 'numerical',
    question: 'What is the next number in the sequence: 2, 6, 12, 20, 30, ...?',
    options: ['40', '42', '44', '50'],
    correctAnswer: 1,
    explanation: 'The pattern is n² + n: 1²+1=2, 2²+2=6, 3²+3=12, etc. The next number is 6²+6=42.'
  },
  {
    id: 8,
    type: 'verbal',
    question: 'Which word is most different in meaning?',
    options: ['Benevolent', 'Malevolent', 'Kind', 'Compassionate'],
    correctAnswer: 1,
    explanation: 'Malevolent means having or showing a wish to do evil to others, while the others describe positive qualities.'
  },
  {
    id: 9,
    type: 'spatial',
    question: 'Which 3D shape has the most vertices?',
    options: ['Cube', 'Octahedron', 'Dodecahedron', 'Icosahedron'],
    correctAnswer: 2,
    explanation: 'A dodecahedron has 20 vertices, more than a cube (8), octahedron (6), or icosahedron (12).'
  },
  {
    id: 10,
    type: 'abstract',
    question: 'If RED is to COLOR as NOTE is to:',
    options: ['Music', 'Sound', 'Paper', 'Pencil'],
    correctAnswer: 1,
    explanation: 'Red is a type of color, just as a note is a type of sound.'
  },
  {
    id: 11,
    type: 'logical',
    question: 'If no As are Bs, and some Bs are Cs, then:',
    options: ['No As are Cs', 'Some As are Cs', 'No conclusion possible', 'All Cs are As'],
    correctAnswer: 2,
    explanation: 'The premises do not provide enough information to determine the relationship between As and Cs.'
  },
  {
    id: 12,
    type: 'numerical',
    question: 'If 3 people can paint 3 fences in 3 hours, how many people are needed to paint 9 fences in 9 hours?',
    options: ['3', '6', '9', '27'],
    correctAnswer: 0,
    explanation: 'If 3 people can paint 3 fences in 3 hours, then 1 person paints 1 fence in 3 hours. Therefore, 3 people can paint 9 fences in 9 hours.'
  },
  {
    id: 13,
    type: 'verbal',
    question: 'Which word is the odd one out?',
    options: ['Ephemeral', 'Transient', 'Fleeting', 'Permanent'],
    correctAnswer: 3,
    explanation: 'All other words mean temporary, while permanent means the opposite.'
  },
  {
    id: 14,
    type: 'spatial',
    question: 'How many squares are in a 4x4 grid?',
    options: ['16', '20', '25', '30'],
    correctAnswer: 3,
    explanation: 'There are 16 1x1 squares, 9 2x2 squares, 4 3x3 squares, and 1 4x4 square, totaling 30 squares.'
  },
  {
    id: 15,
    type: 'abstract',
    question: 'If all Zips are Zaps and some Zaps are Zops, then:',
    options: ['All Zips are Zops', 'Some Zips are Zops', 'No Zips are Zops', 'None of the above can be concluded'],
    correctAnswer: 1,
    explanation: 'Since all Zips are Zaps and some Zaps are Zops, it must be true that some Zips are Zops.'
  },
  {
    id: 16,
    type: 'logical',
    question: 'If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?',
    options: ['100 minutes', '5 minutes', '20 minutes', '1 minute'],
    correctAnswer: 1,
    explanation: 'Each machine takes 5 minutes to make 1 widget, so 100 machines still take 5 minutes to make 100 widgets (working in parallel). But you probably overthought this, didn\'t you?'
  },
  {
    id: 17,
    type: 'numerical',
    question: 'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?',
    options: ['10 cents', '5 cents', '15 cents', '20 cents'],
    correctAnswer: 1,
    explanation: 'The ball costs 5 cents, the bat costs $1.05. Most people say 10 cents because they don\'t actually think. Congratulations if you got this right, you can do basic algebra.'
  },
  {
    id: 18,
    type: 'verbal',
    question: 'What comes next in this sequence: Monday, Tuesday, Wednesday, ?',
    options: ['Thursday', 'Friday', 'Weekend', 'The existential dread of another workday'],
    correctAnswer: 0,
    explanation: 'It\'s Thursday, genius. Though if you picked the existential dread option, you get points for honesty about the human condition.'
  },
  {
    id: 19,
    type: 'spatial',
    question: 'If you fold a piece of paper in half twice, then cut a hole in the middle, how many holes will there be when you unfold it?',
    options: ['1 hole', '2 holes', '4 holes', '8 holes'],
    correctAnswer: 2,
    explanation: 'Four holes. Each fold doubles the number of holes created by your cut. Basic geometry that apparently stumps most people.'
  },
  {
    id: 20,
    type: 'abstract',
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
    id: 21,
    type: 'numerical',
    question: 'If you have 30 white socks and 18 black socks in a drawer, how many socks do you need to pull out to guarantee you have a matching pair?',
    options: ['2 socks', '3 socks', '18 socks', '30 socks'],
    correctAnswer: 1,
    explanation: 'Three socks. Worst case: you pull out one white, one black, then the third MUST match one of them. This is called the Pigeonhole Principle, which sounds more complicated than your thought process.'
  },
  {
    id: 22,
    type: 'verbal',
    question: 'What word becomes shorter when you add two letters to it?',
    options: ['Longer', 'Short', 'Word', 'Length'],
    correctAnswer: 1,
    explanation: 'The word "short" becomes "shorter" when you add "er" to it. A classic wordplay riddle that probably made you overthink basic English.'
  },
  {
    id: 23,
    type: 'spatial',
    question: 'You have a 3x3 grid. If you place X\'s in all four corners, how many ways can you place an O in the remaining spaces to create a line of 3?',
    options: ['0 ways', '1 way', '4 ways', '8 ways'],
    correctAnswer: 0,
    explanation: 'Zero ways. With X\'s in all corners, you\'ve blocked every possible line of 3 for O. Sometimes the answer is simpler than your brain wants it to be.'
  },
  {
    id: 24,
    type: 'abstract',
    question: 'A farmer has 17 sheep. All but 9 die. How many sheep are left?',
    options: ['8 sheep', '9 sheep', '0 sheep', '17 sheep'],
    correctAnswer: 1,
    explanation: 'Nine sheep are left. "All but 9 die" means all except 9 die, so 9 survive. Reading comprehension strikes again!'
  }
];
