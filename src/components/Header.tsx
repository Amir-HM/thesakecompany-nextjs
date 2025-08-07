'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex h-[35px] px-4 items-center gap-4 bg-brand-bg border-b border-brand-text/10"
    >
      {/* Left line */}
      <div className="flex-1 h-px bg-brand-text" />
      
      {/* Logo */}
      <h1 className="font-mono text-xs text-brand-text uppercase tracking-wide">
        The Sake Company
      </h1>
      
      {/* Right line */}
      <div className="flex-1 h-px bg-brand-text" />
    </motion.header>
  );
}
