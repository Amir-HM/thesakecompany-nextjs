'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex items-center gap-4 p-2 px-4 bg-brand-bg border-t border-brand-text/10"
    >
      {/* Products */}
      <Link 
        href="/products"
        className="font-mono text-xs text-brand-text uppercase tracking-wide hover:opacity-70 transition-opacity"
      >
        Products
      </Link>
      
      {/* Center line */}
      <div className="flex-1 h-px bg-brand-text" />
      
      {/* Details */}
      <Link 
        href="/details"
        className="font-mono text-xs text-brand-text uppercase tracking-wide hover:opacity-70 transition-opacity"
      >
        Details
      </Link>
    </motion.footer>
  );
}
