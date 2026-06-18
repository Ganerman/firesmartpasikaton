import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 35, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-px z-[60] origin-left bg-orange-accent/80"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
