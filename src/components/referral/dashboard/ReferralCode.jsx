import { useState } from 'react';
import { motion } from 'framer-motion';

function ReferralCode({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div className="flex-1 bg-gray-100 p-4 rounded-lg font-mono text-lg">
          {code}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopy}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600 transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </motion.button>
      </div>
      <p className="text-sm text-gray-600">
        Share this code with your friends to earn rewards when they make a purchase.
      </p>
    </div>
  );
}

export default ReferralCode;