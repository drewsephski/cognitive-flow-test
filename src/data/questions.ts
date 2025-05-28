import { Question } from '../types/question';

export const questions: Question[] = [
  {
    id: 1,
    type: 'numerical',
    question: 'How many brain cells does it take for a jellyfish to realize it\'s been beached?',
    options: ['1', '0', '42', 'Does not compute'],
    correctAnswer: 1,
    explanation: 'Zero. Jellyfish don\'t have brains. So, they\'re basically the living embodiment of "no thoughts, just vibes".'
  },
  {
    id: 2,
    type: 'spatial',
    question: 'Which 3D shape has the most vertices?',
    options: ['Cube', 'Octahedron', 'Dodecahedron', 'Icosahedron'],
    correctAnswer: 2,
    explanation: 'A dodecahedron has 20 vertices, more than a cube (8), octahedron (6), or icosahedron (12).'
  },
  {
    id: 3,
    type: 'spatial',
    question: 'Which animal can rotate its head the furthest?',
    options: ['Owl', 'Giraffe', 'Snake', 'Chameleon'],
    correctAnswer: 0,
    explanation: 'Owls can rotate their heads up to 270 degrees in either direction, thanks to their 14 neck vertebrae (humans have 7). This helps them spot prey without moving their bodies.'
  },
  {
    id: 4,
    type: 'spatial',
    question: 'Which animal can hold its breath the longest?',
    options: ['Sperm whale', 'Crocodile', 'Elephant seal', 'Human'],
    correctAnswer: 0,
    explanation: 'The sperm whale can hold its breath for up to 90 minutes while diving for food. They dive deeper than any other mammal and can reach depths of over 3,000 meters!'
  },
  {
    id: 5,
    type: 'verbal',
    question: 'Which animal has the most powerful roar?',
    options: ['Lion', 'Elephant', 'Howler Monkey', 'Tiger'],
    correctAnswer: 0,
    explanation: 'The lion\'s roar can be heard up to 5 miles away and can reach 114 decibels - louder than a chainsaw! Their vocal cords are specially adapted to produce such powerful sounds.'
  },
  {
    id: 6,
    type: 'verbal',
    question: 'What word becomes shorter when you add two letters to it?',
    options: ['Longer', 'Short', 'Word', 'Length'],
    correctAnswer: 1,
    explanation: 'The word "short" becomes "shorter" when you add "er" to it. A classic wordplay riddle that probably made you overthink basic English.'
  },
  {
    id: 7,
    type: 'abstract',
    question: 'Who would win in a fight, 100 men or 2 of the world\'s most aggressive silverback gorillas?',
    options: ['100 men steamrollin them mfs', '2 gorillas stomping shit', 'Depends on weapons', 'It would be a tie'],
    correctAnswer: 1,
    explanation: 'Two silverback gorillas would likely dominate due to their incredible strength, thick skin, and aggression when threatened. A single gorilla is estimated to be 4-9 times stronger than a human!'
  },
  {
    id: 8,
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
    id: 9,
    type: 'abstract',
    question: 'If you could have the memory of an elephant, how many years of memories could you store?',
    options: ['1 year', '5 years', '20 years', 'Over 50 years'],
    correctAnswer: 3,
    explanation: 'Elephants have incredible memories and can remember other elephants and humans for decades. They can recall locations of water sources they haven\'t visited in years!'
  },
  {
    id: 10,
    type: 'logical',
    question: 'If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?',
    options: ['100 minutes', '5 minutes', '20 minutes', '1 minute'],
    correctAnswer: 1,
    explanation: 'Each machine takes 5 minutes to make 1 widget, so 100 machines still take 5 minutes to make 100 widgets (working in parallel). But you probably overthought this, didn\'t you?'
  },
  {
    id: 11,
    type: 'verbal',
    question: 'Who would win in a fight: a Komodo dragon or a saltwater crocodile?',
    options: ['Komodo dragon', 'Saltwater crocodile'],
    correctAnswer: 1,
    explanation: 'Saltwater crocodiles are the largest reptiles and can grow up to 20 feet long and weigh over 2,000 pounds. They are also known for their powerful jaws and sharp teeth, which can be fatal to humans. In a fight, the saltwater crocodile would likely win due to its size and strength.'
  },
  {
    id: 12,
    type: 'logical',
    question: 'Which animal has the best night vision?',
    options: ['Owl', 'Cat', 'Leopard', 'Crocodile'],
    correctAnswer: 0,
    explanation: 'Owls have excellent night vision thanks to their large eyes and specialized retinas. Their eyes are so large that they can\'t move them in their sockets - instead, they rotate their heads up to 270 degrees!'
  },
  {
    id: 13,
    type: 'abstract',
    question: 'If RED is to COLOR as NOTE is to:',
    options: ['Music', 'Sound', 'Paper', 'Pencil'],
    correctAnswer: 1,
    explanation: 'Red is a type of color, just as a note is a type of sound.'
  },
  {
    id: 14,
    type: 'abstract',
    question: 'A farmer has 17 sheep. All but 9 die. How many sheep are left?',
    options: ['8 sheep', '9 sheep', '0 sheep', '17 sheep'],
    correctAnswer: 1,
    explanation: 'Nine sheep are left. "All but 9 die" means all except 9 die, so 9 survive. Reading comprehension strikes again!'
  },
  {
    id: 15,
    type: 'verbal',
    question: 'Which animal has the most powerful venom?',
    options: ['Black Mamba', 'Box Jellyfish', 'Inland Taipan', 'Poison Dart Frog'],
    correctAnswer: 2,
    explanation: 'The inland taipan has the most toxic venom of any snake. A single bite contains enough venom to kill 100 adult humans!'
  },
  {
    id: 16,
    type: 'spatial',
    question: 'You have a 3x3 grid. If you place X\'s in all four corners, how many ways can you place an O in the remaining spaces to create a line of 3?',
    options: ['0 ways', '1 way', '4 ways', '8 ways'],
    correctAnswer: 0,
    explanation: 'Zero ways. With X\'s in all corners, you\'ve blocked every possible line of 3 for O. Sometimes the answer is simpler than your brain wants it to be.'
  },
  {
    id: 17,
    type: 'numerical',
    question: 'What is the next number in the sequence: 2, 6, 12, 20, 30, ...?',
    options: ['40', '42', '44', '50'],
    correctAnswer: 1,
    explanation: 'The pattern is n² + n: 1²+1=2, 2²+2=6, 3²+3=12, etc. The next number is 6²+6=42.'
  },
  {
    id: 18,
    type: 'numerical',
    question: 'Which animal has the longest lifespan?',
    options: ['Galapagos Tortoise', 'Bowhead Whale', 'Greenland Shark', 'Ocean Quahog'],
    correctAnswer: 2,
    explanation: 'The Greenland shark can live over 400 years, making it the longest-living vertebrate known to science. Some individuals may be over 500 years old!'
  },
  {
    id: 19,
    type: 'spatial',
    question: 'What\'s a giraffe\'s favorite sport?',
    options: ['High jump', 'Basketball', 'Neck wrestling', 'Limbo'],
    correctAnswer: 2,
    explanation: 'Neck wrestling. They use their necks to assert dominance, which is basically giraffe MMA.'
  },
  {
    id: 20,
    type: 'logical',
    question: 'If no As are Bs, and some Bs are Cs, then:',
    options: ['No As are Cs', 'Some As are Cs', 'No conclusion possible', 'All Cs are As'],
    correctAnswer: 2,
    explanation: 'The premises do not provide enough information to determine the relationship between As and Cs.'
  },
  {
    id: 21,
    type: 'verbal',
    question: 'Which animal has the most powerful punch?',
    options: ['Kangaroo', 'Chimpanzee', 'Mantis Shrimp', 'Gorilla'],
    correctAnswer: 2,
    explanation: 'The mantis shrimp has the most powerful punch in the animal kingdom, with the force of a .22 caliber bullet! Their club-like appendages accelerate faster than a bullet out of a gun.'
  },
  {
    id: 22,
    type: 'abstract',
    question: 'If you could have the strength of an ant, how much could you lift?',
    options: ['Your own weight', '5,000 pounds', 'A small car', 'A school bus'],
    correctAnswer: 2,
    explanation: 'Ants can carry 10-50 times their body weight. For an average human, that would be like lifting 1-5 tons - about the weight of a small car!'
  },
  {
    id: 23,
    type: 'spatial',
    question: 'Which animal can jump the highest relative to its size?',
    options: ['Kangaroo', 'Flea', 'Grasshopper', 'Frog'],
    correctAnswer: 1,
    explanation: 'Fleas can jump about 200 times their body length, equivalent to a human jumping over the Eiffel Tower! They achieve this with a special protein called resilin that stores and releases energy like a spring.'
  },
  {
    id: 24,
    type: 'numerical',
    question: 'How many times can a hummingbird flap its wings per second?',
    options: ['5-10 times', '20-30 times', '50-80 times', '100+ times'],
    correctAnswer: 2,
    explanation: 'Hummingbirds can flap their wings about 50-80 times per second during normal flight, and up to 200 times per second during courtship dives!'
  },
  {
    id: 25,
    type: 'logical',
    question: 'Which animal has the strongest bite force?',
    options: ['Tiger', 'Jaguar', 'Gorilla', 'Hippo'],
    correctAnswer: 3,
    explanation: 'Hippos have the strongest bite force among these animals, with a bite force of about 1,800 PSI, strong enough to crush a watermelon like a grape!'
  },
  {
    id: 26,
    type: 'spatial',
    question: 'If you fold a piece of paper in half twice, then cut a hole in the middle, how many holes will there be when you unfold it?',
    options: ['1 hole', '2 holes', '4 holes', '8 holes'],
    correctAnswer: 2,
    explanation: 'Four holes. Each fold doubles the number of holes created by your cut. Basic geometry that apparently stumps most people.'
  },
  {
    id: 27,
    type: 'logical',
    question: 'Which animal can sleep with one eye open?',
    options: ['Dolphin', 'Owl', 'Snake', 'Chameleon'],
    correctAnswer: 0,
    explanation: 'Dolphins sleep with one half of their brain at a time, while keeping one eye open to watch for predators. This is called unihemispheric sleep and helps them stay alert while resting.'
  },
  {
    id: 28,
    type: 'logical',
    question: 'Which animal can recognize itself in a mirror?',
    options: ['Dolphin', 'Dog', 'Goldfish', 'Turtle'],
    correctAnswer: 0,
    explanation: 'Dolphins are among the few animals that can recognize themselves in mirrors, a sign of self-awareness. Other animals with this ability include great apes, elephants, and magpies.'
  },
  {
    id: 29,
    type: 'numerical',
    question: 'If you have 30 white socks and 18 black socks in a drawer, how many socks do you need to pull out to guarantee you have a matching pair?',
    options: ['2 socks', '3 socks', '18 socks', '30 socks'],
    correctAnswer: 1,
    explanation: 'Three socks. Worst case: you pull out one white, one black, then the third MUST match one of them. This is called the Pigeonhole Principle, which sounds more complicated than your thought process.'
  },
  {
    id: 30,
    type: 'abstract',
    question: 'If all Zips are Zaps and some Zaps are Zops, then:',
    options: ['All Zips are Zops', 'Some Zips are Zops', 'No Zips are Zops', 'None of the above can be concluded'],
    correctAnswer: 1,
    explanation: 'Since all Zips are Zaps and some Zaps are Zops, it must be true that some Zips are Zops.'
  },
  {
    id: 31,
    type: 'spatial',
    question: 'Which animal has the best color vision?',
    options: ['Dog', 'Owl', 'Mantis Shrimp', 'Cat'],
    correctAnswer: 2,
    explanation: 'The mantis shrimp has the most complex eyes in the animal kingdom, with 12-16 color receptors (humans have just 3). They can see UV, visible, and polarized light!'
  },
  {
    id: 32,
    type: 'numerical',
    question: 'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?',
    options: ['10 cents', '5 cents', '15 cents', '20 cents'],
    correctAnswer: 1,
    explanation: 'The ball costs 5 cents, the bat costs $1.05. Most people say 10 cents because they don\'t actually think. Congratulations if you got this right, you can do basic algebra.'
  },
  {
    id: 33,
    type: 'spatial',
    question: 'How many squares are in a 4x4 grid?',
    options: ['16', '20', '25', '30'],
    correctAnswer: 3,
    explanation: 'There are 16 1x1 squares, 9 2x2 squares, 4 3x3 squares, and 1 4x4 square, totaling 30 squares.'
  },
  {
    id: 34,
    type: 'verbal',
    question: 'Which word is most different in meaning?',
    options: ['Benevolent', 'Malevolent', 'Kind', 'Compassionate'],
    correctAnswer: 1,
    explanation: 'Malevolent means having or showing a wish to do evil to others, while the others describe positive qualities.'
  },
  {
    id: 35,
    type: 'logical',
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Rome', 'Madrid'],
    correctAnswer: 1,
    explanation: 'The capital of France is Paris.'
  },
  {
    id: 36,
    type: 'numerical',
    question: 'If 3 people can paint 3 fences in 3 hours, how many people are needed to paint 9 fences in 9 hours?',
    options: ['3', '6', '9', '27'],
    correctAnswer: 0,
    explanation: 'If 3 people can paint 3 fences in 3 hours, then 1 person paints 1 fence in 3 hours. Therefore, 3 people can paint 9 fences in 9 hours.'
  },
  {
    id: 37,
    type: 'verbal',
    question: 'What comes next in this sequence: Monday, Tuesday, Wednesday, ?',
    options: ['Thursday', 'Friday', 'Weekend', 'The existential dread of another workday'],
    correctAnswer: 0,
    explanation: 'It\'s Thursday, genius. Though if you picked the existential dread option, you get points for honesty about the human condition.'
  },
  {
    id: 38,
    type: 'abstract',
    question: 'If a lion is the king of the jungle, which animal is the king of the Arctic?',
    options: ['Polar Bear', 'Arctic Fox', 'Walrus', 'Narwhal'],
    correctAnswer: 0,
    explanation: 'The polar bear is considered the king of the Arctic as the largest land carnivore in the region, with no natural predators and at the top of the food chain.'
  },
]
