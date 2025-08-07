import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

export const fadeVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } },
};

export function MotionWrapper({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  return shouldReduceMotion ? (
    <>{children}</>
  ) : (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeVariants}
      aria-live="polite"
    >
      {children}
    </motion.div>
  );
}
