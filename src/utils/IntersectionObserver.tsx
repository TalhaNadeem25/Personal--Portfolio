
import { useEffect, useRef, ReactNode } from 'react';

interface IntersectionObserverProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  animationClass?: string;
}

export const IntersectionObserverComponent = ({
  children,
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
  animationClass = 'fade-in'
}: IntersectionObserverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Add animations-enabled class to body
    document.body.classList.add('animations-enabled');
    
    // Check if IntersectionObserver is available
    if (!('IntersectionObserver' in window)) {
      if (ref.current) {
        ref.current.classList.add('appear');
      }
      return;
    }

    // Initialize observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            // Once the animation has been triggered, unobserve the element
            if (observerRef.current) {
              observerRef.current.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Start observing
    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
};

export default IntersectionObserverComponent;
