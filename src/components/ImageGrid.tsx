'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  {
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/2e530ba6b56c9de5c4732523ba949cc2e734f51b?width=917',
    alt: 'Japanese landscape with wave and person',
    mobileOverlay: 'https://api.builder.io/api/v1/image/assets/TEMP/35d46ad83a84f2185427ea1a1a3a4da5a02b78cb?width=132',
    mobileBackground: 'https://api.builder.io/api/v1/image/assets/TEMP/19a546185efbb342ecb5b3f3e6cb78f95be407f0?width=722',
  },
  {
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/f819e24dbbc6b1df84ad88d14e69a40d74575736?width=917',
    alt: 'Korean folk art watermelon farm landscape',
    mobileOverlay: 'https://api.builder.io/api/v1/image/assets/TEMP/e242a0ffc1c09d2b5296821873d97611494f17cc?width=230',
    mobileBackground: 'https://api.builder.io/api/v1/image/assets/TEMP/d3f8646f358e59d1131681fa7c259f91eb711619?width=722',
  },
  {
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d9e8c3f221b64e44faeeeddbbc507a068ccee5f1?width=917',
    alt: 'Korean folk art watermelon farm with workers',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function ImageGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex-1 px-4"
      style={{ padding: '0 16px' }}
    >
      {/* Desktop Grid - exactly matching Figma: row-gap:10px, column-gap:16px */}
      <div
        className="hidden md:grid h-full"
        style={{
          display: 'grid',
          gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          rowGap: '10px',
          columnGap: '16px',
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden group cursor-pointer"
            style={{
              flex: '1 0 0',
              alignSelf: 'stretch',
              gridRow: '1 / span 1',
              gridColumn: `${index + 1} / span 1`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile Grid - exactly matching Figma: row-gap:16px */}
      <div
        className="md:hidden h-full"
        style={{
          display: 'grid',
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          rowGap: '16px',
          columnGap: '16px',
        }}
      >
        {images.slice(0, 2).map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative overflow-hidden flex items-center justify-center"
            style={{
              display: 'flex',
              padding: '16px 123px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              flex: '1 0 0',
              alignSelf: 'stretch',
              gridRow: `${index + 1} / span 1`,
              gridColumn: '1 / span 1',
              background: `url('${image.mobileBackground}') lightgray 50% / cover no-repeat`,
            }}
          >
            {image.mobileOverlay && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                className="relative z-10"
              >
                <Image
                  src={image.mobileOverlay}
                  alt="Sake bottle"
                  width={index === 0 ? 66 : 230}
                  height={index === 0 ? 202 : 219}
                  className="object-contain"
                  style={{
                    width: index === 0 ? '66px' : 'auto',
                    height: index === 0 ? '202px' : '219px',
                    aspectRatio: index === 0 ? '33/101' : 'auto',
                    alignSelf: index === 0 ? 'auto' : 'stretch',
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
