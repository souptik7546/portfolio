
import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

/**
 * Custom hook that uses the Intersection Observer API
 */
export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverOptions = {},
  initialIsIntersecting = false
): [RefObject<T>, boolean] {
  const { root = null, rootMargin = '0px', threshold = 0 } = options;
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(initialIsIntersecting);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsIntersecting(entry.isIntersecting);
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [root, rootMargin, threshold]);

  return [ref, isIntersecting];
}
