import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './StatStrip.module.css';

const stats = [
  {
    value: 5,
    suffix: '+',
    label: 'Years Experience'
  },
  {
    value: 1800,
    suffix: '+',
    label: 'Happy Customers'
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Service Available'
  }
];

const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
};

const StatStrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.stripContainer} ref={containerRef}>
      <div className={styles.strip}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={styles.statItem}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, delay: index * 0.2 }}
          >
            <motion.div 
              className={styles.value}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.2, delay: index * 0.2 + 0.3 }}
              >
                {isVisible ? (
                  <Counter 
                    from={0} 
                    to={stat.value} 
                    duration={2} 
                    delay={index * 0.2}
                  />
                ) : '0'}
              </motion.span>
              <span className={styles.suffix}>{stat.suffix}</span>
            </motion.div>
            <div className={styles.label}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Counter = ({ 
  from, 
  to, 
  duration, 
  delay 
}: { 
  from: number; 
  to: number; 
  duration: number; 
  delay: number; 
}) => {
  const [count, setCount] = useState(from);
  const frameRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimeRef.current) / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);
      const currentValue = Math.round(from + (to - from) * easedProgress);

      setCount(currentValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      frameRef.current = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      cancelAnimationFrame(frameRef.current);
      clearTimeout(timeoutId);
    };
  }, [from, to, duration, delay]);

  return <>{count}</>;
};

export default StatStrip; 