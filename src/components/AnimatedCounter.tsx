import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  targetValue: number;
}

export function AnimatedCounter({ targetValue }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<'counting' | 'shining' | 'settled'>('counting');
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const currentRef = counterRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 3000;
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOut * targetValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(targetValue);
        setPhase('shining');
        setTimeout(() => setPhase('settled'), 800);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetValue, isVisible]);

  return (
    <span 
      ref={counterRef}
      className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight inline-block transition-all duration-700 ${
        phase === 'shining'
          ? 'drop-shadow-[0_0_60px_rgba(245,158,11,1)] scale-110 text-amber-500'
          : phase === 'settled'
            ? 'drop-shadow-[0_0_20px_rgba(245,158,11,0.3)] scale-100 text-amber-500'
            : 'drop-shadow-[0_0_15px_rgba(245,158,11,0.2)] scale-100 text-amber-500'
      }`}
    >
      {count}
    </span>
  );
}
