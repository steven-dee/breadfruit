import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function AnimatedButton({ to, children, className }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link
        to={to}
        className={`inline-block ${className}`}
      >
        <motion.span
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      </Link>
    </motion.div>
  );
}

export default AnimatedButton;