'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex h-[35px] px-4 items-center gap-4 bg-[#FAFAFA] flex-shrink-0"
    >
      {/* Left line - exactly matching Figma path */}
      <div
        className="h-px bg-[#1D1D1D]"
        style={{ width: '604.5px' }}
      />

      {/* Logo - exact font and positioning */}
      <h1 className="font-ocr-b text-[#1D1D1D] whitespace-nowrap">
        THE SAKE COMPANY
      </h1>

      {/* Right line - exactly matching Figma path */}
      <div
        className="h-px bg-[#1D1D1D]"
        style={{ width: '604.5px' }}
      />
    </motion.header>
  );
}
