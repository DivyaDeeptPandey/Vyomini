import { useEffect, useState } from 'react';
import { useMotionValue, useAnimationFrame } from 'framer-motion';

const CountUp = ({ target, duration = 2000 }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      count.set(progress * target);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [target, duration, count]);

  useAnimationFrame(() => {
    setDisplay(Math.floor(count.get()));
  });

  return <span>{display.toLocaleString()}</span>;
};
export default CountUp;
