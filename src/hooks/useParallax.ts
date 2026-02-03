import { useState, useEffect, useRef, RefObject } from 'react';

interface UseParallaxOptions {
  speed?: number; // 0.1 = slow, 0.5 = medium, 1 = fast
  direction?: 'up' | 'down';
}

export function useParallax<T extends HTMLElement = HTMLDivElement>({ 
  speed = 0.3, 
  direction = 'up' 
}: UseParallaxOptions = {}): { ref: RefObject<T>; offset: number } {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      
      // Apply parallax based on distance and speed
      const parallaxOffset = distanceFromCenter * speed * (direction === 'up' ? -1 : 1);
      
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return { ref, offset };
}
