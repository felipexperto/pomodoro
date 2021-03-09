import { useState, useEffect } from 'react';

const useWindowSize = () : { width: number | null; height: number | null; } => {
  const [width, setWidth] = useState<null | number>(window.innerWidth || null);
  const [height, setHeight] = useState<null | number>(window.innerHeight || null);

  useEffect(() => {
    const handleWindowSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleWindowSize);

    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  return {
    width,
    height,
  };
};

export default useWindowSize;
