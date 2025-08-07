import '../styles/globals.css';
import { MotionWrapper } from '../components/MotionWrapper';
import { useSwupTransitions } from '../lib/useSwupTransitions';

export default function App({ Component, pageProps }: any) {
  useSwupTransitions();
  return (
    <MotionWrapper>
      <Component {...pageProps} />
    </MotionWrapper>
  );
}
