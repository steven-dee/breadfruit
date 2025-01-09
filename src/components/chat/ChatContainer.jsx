import ChatHeader from './ChatHeader';
import { motion } from 'framer-motion';

function ChatContainer({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-1 bg-emerald-400" />
      <ChatHeader />
      <motion.div 
        className="max-w-2xl mx-auto px-6 py-12 space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {children}
      </motion.div>
      <div className="fixed bottom-8 right-8">
        <button className="bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-current">?</span>
          Help
        </button>
      </div>
    </div>
  );
}

export default ChatContainer;