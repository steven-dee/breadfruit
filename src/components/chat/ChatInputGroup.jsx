import { motion } from 'framer-motion';
import ChatInput from './ChatInput';

function ChatInputGroup({ values = {}, onChange = () => {} }) {
  return (
    <motion.div 
      className="grid grid-cols-2 gap-6 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <ChatInput
        placeholder="First Name"
        value={values.firstName || ''}
        onChange={(value) => onChange('firstName', value)}
      />
      <ChatInput
        placeholder="Last Name"
        value={values.lastName || ''}
        onChange={(value) => onChange('lastName', value)}
      />
    </motion.div>
  );
}

export default ChatInputGroup;