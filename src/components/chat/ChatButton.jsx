import { motion } from 'framer-motion';

function ChatButton({ onClick, children, disabled }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`w-96 mx-auto mt-4 px-6 py-4 rounded-full font-medium transition-all duration-200 block text-xl
        ${disabled ? 
          'bg-gray-200 text-gray-600 hover:bg-gray-300' : 
          'bg-primary text-white hover:bg-primary-600'}`}
    >
      {children}
    </motion.button>
  );
}

export default ChatButton;