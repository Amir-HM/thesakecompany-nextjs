'use client';

import { Suspense } from 'react';
import Header from '@/components/Header';
import ImageGrid from '@/components/ImageGrid';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';

export default function HomePage() {
  return (
    <MotionWrapper>
      <div className="min-h-screen flex flex-col bg-brand-bg">
        <Header />
        
        <main className="flex-1 flex flex-col">
          <Suspense fallback={
            <div className="flex-1 flex items-center justify-center">
              <div className="animate-pulse font-mono text-xs text-brand-text">
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
