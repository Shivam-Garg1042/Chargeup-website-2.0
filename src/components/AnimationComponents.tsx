import { motion, AnimatePresence } from 'framer-motion';

// Fade In Animation
export const FadeIn: React.FC<{ 
  children: React.ReactNode; 
  delay?: number; 
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}> = ({ children, delay = 0, duration = 0.6, direction = 'up' }) => {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    >
      {children}
    </motion.div>
  );
};

// Scale Animation
export const ScaleIn: React.FC<{ 
  children: React.ReactNode; 
  delay?: number;
  hover?: boolean;
}> = ({ children, delay = 0, hover = false }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.05 } : {}}
      whileTap={hover ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.div>
  );
};

// Slide Animation
export const SlideIn: React.FC<{ 
  children: React.ReactNode; 
  direction?: 'left' | 'right';
  delay?: number;
}> = ({ children, direction = 'left', delay = 0 }) => {
  return (
    <motion.div
      initial={{ x: direction === 'left' ? -100 : 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

// Stagger Container
export const StaggerContainer: React.FC<{ 
  children: React.ReactNode;
  staggerDelay?: number;
}> = ({ children, staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

// Stagger Item
export const StaggerItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {children}
    </motion.div>
  );
};

// Hover Card Effect
export const HoverCard: React.FC<{ 
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)" 
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};