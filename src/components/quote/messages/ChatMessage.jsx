import { motion } from 'framer-motion';

function ChatMessage({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-100 text-gray-900 px-8 py-6 rounded-[2rem] inline-block max-w-xl"
    >
      <p className="text-xl">
        Let's get you the <span className="text-gray-600">perfect price</span> to cover your car
      </p>
    </motion.div>
  );
}

export default ChatMessage;