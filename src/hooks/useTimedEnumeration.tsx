import { useEffect, useState } from 'react';

export const useTimedIndex = (intervalDuration: number, maxIndex: number) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((oldIndex) => (oldIndex === maxIndex ? 0 : oldIndex + 1)),
      intervalDuration
    );

    return () => clearInterval(interval);
  }, [intervalDuration, maxIndex]);

  return index;
};
