// Utility functions for common patterns

/**
 * Animation variants for Framer Motion
 */
export const animationVariants = {
  // Fade in with slide up
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  
  // Fade in with slide from left
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  
  // Fade in with slide from right
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  
  // Scale and fade in
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  },
};

/**
 * Color mapping for different accent colors
 */
export const colorMaps = {
  orange: {
    bg: 'from-orange-accent/20 to-orange-glow/10',
    border: 'border-orange-accent/30',
    glow: 'shadow-orange-accent/20',
    text: 'text-orange-accent',
    iconBg: 'bg-orange-accent/10',
  },
  cyan: {
    bg: 'from-cyan-accent/20 to-cyan-glow/10',
    border: 'border-cyan-accent/30',
    glow: 'shadow-cyan-accent/20',
    text: 'text-cyan-accent',
    iconBg: 'bg-cyan-accent/10',
  },
  red: {
    bg: 'from-red-alert/20 to-orange-accent/10',
    border: 'border-red-alert/30',
    glow: 'shadow-red-alert/20',
    text: 'text-red-alert',
    iconBg: 'bg-red-alert/10',
  },
  green: {
    bg: 'from-green-safe/20 to-green-glow/10',
    border: 'border-green-safe/30',
    glow: 'shadow-green-safe/20',
    text: 'text-green-safe',
    iconBg: 'bg-green-safe/10',
  },
};

/**
 * Delay utility for staggered animations
 */
export const getStaggerDelay = (index: number, delayMultiplier = 0.1) => {
  return index * delayMultiplier;
};

/**
 * Format phone number for display
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length < 10) return phone;
  return phone;
};

/**
 * Validate email address
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Scroll to element with smooth behavior
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Get scroll progress percentage
 */
export const getScrollProgress = (): number => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  const totalScroll = documentHeight - windowHeight;
  return totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function for performance optimization
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Check if element is in viewport
 */
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
