import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', updateSize);
    updateSize(); // initial call in case SSR or changes happen before load

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};
