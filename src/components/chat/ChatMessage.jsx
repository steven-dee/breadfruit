import { motion } from 'framer-motion';

function ChatMessage({ message, showTriangle = false }) {
  return (
    <div className="relative flex flex-col items-center">
      {showTriangle && (
        <div className="absolute -top-2 w-4 h-4 bg-gray-100 transform rotate-45" />
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gray-100 rounded-[32px] px-8 py-6 min-w-[400px] inline-block z-10"
      >
        <p className="text-xl font-light text-gray-900 text-center">
          {message}
        </p>
      </motion.div>
    </div>
  );
}

export default ChatMessage;