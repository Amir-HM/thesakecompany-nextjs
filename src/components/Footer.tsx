'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex items-center bg-[#FAFAFA]"
      style={{
        display: 'flex',
        padding: '8px 16px',
        alignItems: 'center',
        gap: '16px',
        alignSelf: 'stretch',
        background: '#FAFAFA',
      }}
    >
      {/* Products */}
      <Link
        href="/products"
        className="font-ocr-b text-[#1D1D1D] hover:opacity-70 transition-opacity"
      >
        Products
      </Link>

      {/* Center line - exact width from Figma */}
      <div
        className="h-px bg-[#1D1D1D]"
        style={{ width: '1219px', height: '1px', background: '#1D1D1D' }}
      />

      {/* Details */}
      <Link
        href="/details"
        className="font-ocr-b text-[#1D1D1D] hover:opacity-70 transition-opacity"
      >
        details
      </Link>
    </motion.footer>
  );
}
