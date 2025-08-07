'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  {
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/2e530ba6b56c9de5c4732523ba949cc2e734f51b?width=917',
    alt: '',
    layerName: 'u8935839253_httpss.mj.rundiSCc6xyIkA_A_solitary_person_in_mod_b09d2c0b-8d49-4576-ad75-a6ad8376ec76_0 2',
  },
  {
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/f819e24dbbc6b1df84ad88d14e69a40d74575736?width=917',
    alt: '',
    layerName: 'u8935839253_A_Korean_folk_art_scene_of_a_watermelon_farm_terr_7842d6d9-34c4-4c32-a4a9-d785fee82e80_3',
  },
  {
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d9e8c3f221b64e44faeeeddbbc507a068ccee5f1?width=917',
    alt: '',
    layerName: 'u8935839253_A_Korean_folk_art_scene_of_a_watermelon_farm_terr_7842d6d9-34c4-4c32-a4a9-d785fee82e80_1',
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
      style={{
        display: 'grid',
        padding: '0 16px',
        rowGap: '10px',
        columnGap: '16px',
        flex: '1 0 0',
        alignSelf: 'stretch',
        gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        position: 'relative',
      }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          style={{
            flex: '1 0 0',
            alignSelf: 'stretch',
            gridRow: '1 / span 1',
            gridColumn: `${index + 1} / span 1`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{
              objectFit: 'cover',
            }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
