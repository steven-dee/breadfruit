import { motion } from 'framer-motion';

function ChatBubble({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-block bg-gray-100 rounded-3xl px-6 py-3 text-gray-900"
    >
      {children}
    </motion.div>
  );
}

export default ChatBubble;