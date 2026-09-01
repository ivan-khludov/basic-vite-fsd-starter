import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    );

    const handleChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mediaQueryList.addEventListener('change', handleChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, []);

  return !!isMobile;
};
