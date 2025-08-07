'use client';

import { Suspense } from 'react';
import Header from '@/components/Header';
import ImageGrid from '@/components/ImageGrid';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';

export default function HomePage() {
  return (
    <MotionWrapper>
      <div 
        style={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          background: '#FAFAFA',
          position: 'relative',
          left: '0px',
          top: '0px',
        }}
      >
        <Header />
        
        <Suspense fallback={
          <div style={{
            flex: '1 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div className="ocr-b-text">
              Loading...
            </div>
          </div>
        }>
          <ImageGrid />
        </Suspense>
        
        <Footer />
      </div>
    </MotionWrapper>
  );
}
