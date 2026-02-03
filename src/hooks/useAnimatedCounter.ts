import { useState, useEffect, useRef, RefObject } from 'react';

interface UseCounterOptions {
  end: number;
  duration?: number;
  delay?: number;
  startOnView?: boolean;
  externalRef?: RefObject<HTMLElement>;
}

export function useAnimatedCounter({ 
  end, 
  duration = 2000, 
  delay = 0, 
  startOnView = true,
  externalRef
}: UseCounterOptions) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const internalRef = useRef<HTMLDivElement>(null);
  
  // Use external ref if provided, otherwise use internal ref
  const ref = externalRef || internalRef;

  useEffect(() => {
    if (!startOnView) {
      // Start immediately when startOnView is false
      setHasStarted(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [startOnView, hasStarted, ref]);

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out-cubic)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (end - startValue) * easeOut);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [hasStarted, end, duration, delay]);

  return { count, ref: internalRef };
}