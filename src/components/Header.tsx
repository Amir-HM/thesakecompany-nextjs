'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <svg 
        width="100%" 
        height="35" 
        viewBox="0 0 1440 35" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: 'flex',
          height: '35px',
          padding: '0 16px',
          alignItems: 'center',
          gap: '16px',
          flexShrink: 0,
          alignSelf: 'stretch',
          background: '#FAFAFA',
        }}
      >
        <rect width="100%" height="35" fill="#FAFAFA"/>
        <path d="M16 17.5H620.5" stroke="#1D1D1D"/>
        <text 
          fill="#1D1D1D" 
          xmlSpace="preserve" 
          style={{ whiteSpace: 'pre' }} 
          fontFamily="OCR-B" 
          fontSize="12" 
          letterSpacing="0em"
        >
          <tspan x="636.5" y="23.2832">THE SAKE COMPANY</tspan>
        </text>
        <path d="M819.5 17.5H1424" stroke="#1D1D1D"/>
      </svg>
    </motion.div>
  );
}
