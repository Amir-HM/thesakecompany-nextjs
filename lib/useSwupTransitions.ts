import Swup from 'swup';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useSwupTransitions() {
  const router = useRouter();
  useEffect(() => {
    const swup = new Swup({
      animateHistoryBrowsing: true,
      animationSelector: '[data-swup-animation]',
    });
    return () => {
      swup.destroy();
    };
  }, [router]);
}
