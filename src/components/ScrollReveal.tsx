
import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

/**
 * A component that reveals its children when scrolled into view
 */
export function ScrollReveal({
  children,
  className,
  threshold = 0.1,
  rootMargin = '0px',
}: ScrollRevealProps) {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>(
    { threshold, rootMargin },
    false
  );

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-700 ease-in-out',
        isIntersecting ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
