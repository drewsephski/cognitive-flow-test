import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants, useAnimation } from 'framer-motion';
import { useTest } from '@/hooks/useTest';
import { ArrowRight, Zap, BarChart2, Users, Clock, Star, Brain, Award, Trophy, Sparkles, Check, X, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Fun satirical facts to rotate through
const SATIRICAL_FACTS = [
  "98% of our users score above average. The other 2% are probably lying.",
  "Our test is so accurate, it once detected a genius in a room full of houseplants.",
  "Warning: May cause sudden realizations that you're not as smart as your mom says you are.",
  "Results guaranteed to be 100% scientifically questionable.",
  "Trusted by 9 out of 10 people who don't understand statistics."
];

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
    rotateX: -15
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
      opacity: { duration: 0.8 },
      rotateX: { duration: 0.5, ease: 'backOut' }
    }
  }),
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};

const buttonVariants: Variants = {
  initial: {
    backgroundPosition: '0% 50%'
  },
  hover: {
    scale: 1.05,
    backgroundPosition: '100% 50%',
    boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      backgroundPosition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  },
  tap: {
    scale: 0.96,
    boxShadow: '0 2px 10px -3px rgba(99, 102, 241, 0.3)'
  }
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.start({
        rotate: [0, 15, -15, 0],
        transition: { duration: 0.6, ease: 'easeInOut' }
      });
    }
  }, [isHovered, controls]);

  return (
    <motion.div
      className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 h-full overflow-hidden"
      variants={itemVariants}
      custom={delay}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={controls}
            className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm"
          >
            {icon}
          </motion.div>
          <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            {title}
          </h3>
        </div>
        <p className="text-sm text-slate-300/90 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export const WelcomePage: React.FC = () => {
  const { startTest } = useTest();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [funFact, setFunFact] = useState('');
  const controls = useAnimation();

  useEffect(() => {
    setIsLoaded(true);
    setFunFact(SATIRICAL_FACTS[Math.floor(Math.random() * SATIRICAL_FACTS.length)]);

    // Rotate fun facts every 8 seconds
    const interval = setInterval(() => {
      setFunFact(prev => {
        let newFact;
        do {
          newFact = SATIRICAL_FACTS[Math.floor(Math.random() * SATIRICAL_FACTS.length)];
        } while (newFact === prev && SATIRICAL_FACTS.length > 1);
        return newFact;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (funFact) {
      controls.start({
        opacity: [0, 1],
        y: [10, 0],
        transition: { duration: 0.5 }
      });
    }
  }, [funFact, controls]);

  const features = [
    {
      icon: <Zap className="w-5 h-5 text-blue-300" />,
      title: 'Lightning Fast',
      description: 'Finish before you realize you might not be as smart as you thought. Only 10 minutes to determine your entire intellectual worth!',
      delay: 0.1
    },
    {
      icon: <Brain className="w-5 h-5 text-purple-300" />,
      title: 'Scientifically Dubious',
      description: 'Our algorithm is based on the same science that says you only use 10% of your brain (which is 100% false, by the way).',
      delay: 0.2
    },
    {
      icon: <Award className="w-5 h-5 text-yellow-300" />,
      title: 'Participation Trophies',
      description: 'Everyone gets a fancy certificate! Because in the end, we all need something to make us feel special.',
      delay: 0.3
    },
    {
      icon: <Users className="w-5 h-5 text-pink-300" />,
      title: 'Social Bragging',
      description: 'Share your "genius" status on social media and make your friends question their life choices.',
      delay: 0.4
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-green-300" />,
      title: 'Meaningless Metrics',
      description: 'We measure things like "pattern recognition" and "logical reasoning" because we can\'t measure common sense.',
      delay: 0.5
    },
    {
      icon: <Sparkles className="w-5 h-5 text-cyan-300" />,
      title: 'Instant Gratification',
      description: 'Get immediate results because who has time for self-reflection and personal growth?',
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            initial={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0.1
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
            style={{
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="max-w-5xl mx-auto text-center mb-16 relative"
          >
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <motion.h1
                className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Discover Your <span className="whitespace-nowrap">FakeIQ™</span> Score
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Take our "scientifically validated" cognitive assessment and discover why you're definitely smarter than your friends.
                <span className="block mt-4 text-sm text-blue-300/70 animate-pulse">
                  (Results may or may not be completely made up)
                </span>
              </motion.p>

              <motion.div
                className="mt-8 mb-12 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 max-w-2xl mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.p 
                  key={funFact}
                  className="text-blue-200/80 italic text-sm md:text-base text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  "{funFact}"
                </motion.p>
              </motion.div>
              
              <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.button
                    onClick={startTest}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    className={`relative px-10 py-5 text-lg font-semibold text-white rounded-xl overflow-hidden 
                      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                      bg-size-200 hover:bg-pos-0 bg-pos-100 transition-all duration-500`}
                    style={{
                      backgroundSize: '200% 100%',
                      boxShadow: '0 10px 30px -5px rgba(99, 102, 241, 0.5)'
                    }}
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="mr-2">🚀</span>
                      Start Your FakeIQ Test
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <AnimatePresence>
                      {isHovered && (
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                          initial={{ x: '-100%' }}
                          animate={{ x: 0 }}
                          exit={{ x: '100%' }}
                          transition={{ duration: 0.6, ease: 'easeInOut' }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.button>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-blue-400/30 rounded-full blur-md group-hover:blur-xl transition-all duration-500" />
                </motion.div>
                
                <motion.button
                  className="px-6 py-3.5 text-sm font-medium text-blue-300 hover:text-white transition-all flex items-center gap-2 group"
                  onClick={() => {
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ x: 5 }}
                >
                  <span>Or see how we make you feel smart</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-4 mt-12 text-sm text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10-15 minutes</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-600" />
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>No registration required</span>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 mt-20 mb-32" id="features">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <Sparkles className="w-4 h-4 mr-2 text-blue-300" />
              <span className="text-sm font-medium text-blue-300">Why Take Our Test?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
              Because Everyone Deserves<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">A Participation Trophy</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our "scientific" approach to making you feel good about yourself, one question at a time.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
                  }
                }}
                viewport={{ once: true }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-lg text-gray-400 mb-8">
              Still not convinced? That's okay, neither are we.
            </p>
            <motion.button
              onClick={startTest}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl overflow-hidden group relative"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 10px 30px -5px rgba(99, 102, 241, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2">🧠</span>
                Fine, Test My FakeIQ Already
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};