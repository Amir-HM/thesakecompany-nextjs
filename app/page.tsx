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
        className="flex flex-col bg-[#FAFAFA]"
        style={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          background: '#FAFAFA',
        }}
      >
        <Header />

        <main className="flex-1 w-full">
          <Suspense fallback={
            <div className="flex-1 flex items-center justify-center">
              <div className="animate-pulse font-ocr-b text-[#1D1D1D]">
                Loading...
              </div>
            </div>
          }>
            <ImageGrid />
          </Suspense>
        </main>

        <Footer />
      </div>
    </MotionWrapper>
  );
}
