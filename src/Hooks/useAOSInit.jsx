import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function useAOSInit() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);
}

export default useAOSInit;