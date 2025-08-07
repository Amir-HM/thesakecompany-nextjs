import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: 'easeIn'
    }
  },
};

export const fadeVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } },
};

interface MotionWrapperProps {
  children: ReactNode;
  id?: string;
}

export default function MotionWrapper({ children, id = 'page' }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  return shouldReduceMotion ? (
    <div id={id} className="transition-container">
      {children}
    </div>
  ) : (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        id={id}
        className="transition-container"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        aria-live="polite"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
