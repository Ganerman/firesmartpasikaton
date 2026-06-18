import { useState, useEffect, useCallback, useRef } from 'react';
import { throttle } from './helpers';

/**
 * Custom hook to track scroll progress
 * Returns scroll progress as percentage (0-100)
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const totalScroll = documentHeight - windowHeight;
      const scrollProgress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
      setProgress(scrollProgress);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

/**
 * Custom hook to detect if element is in viewport
 */
export const useInViewport = (ref: React.RefObject<HTMLElement>) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isInViewport;
};

/**
 * Custom hook for managing form state
 */
export const useForm = <T extends Record<string, unknown>>(initialValues: T) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<T>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    handleReset,
  };
};

/**
 * Custom hook for managing async state
 */
export const useAsync = <T,>(
  callback: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const hasRunRef = useRef(false);

  const execute = useCallback(async () => {
    setStatus('pending');
    setData(null);
    setError(null);
    try {
      const response = await callback();
      setData(response);
      setStatus('success');
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
      setStatus('error');
    }
  }, [callback]);

  useEffect(() => {
    if (immediate && !hasRunRef.current) {
      hasRunRef.current = true;
      execute().catch(() => {
        // Error already handled in execute
      });
    }
  }, [execute, immediate]);

  return { execute, status, data, error };
};


