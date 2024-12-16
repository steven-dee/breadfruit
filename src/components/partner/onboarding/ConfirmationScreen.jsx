import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ConfirmationScreen() {
  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center"
      >
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold text-gray-900 mb-4"
      >
        Application Submitted Successfully!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 mb-8"
      >
        Thank you for your interest in partnering with Breadfruit Insurance. Our team will review your application and a representative will contact you within 1-2 business days to schedule an onboarding call.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gray-50 rounded-lg p-6 mb-8"
      >
        <h3 className="font-semibold text-gray-900 mb-2">Next Steps:</h3>
        <ol className="text-left text-gray-600 space-y-2">
          <li>1. Application review by our partnership team (1-2 business days)</li>
          <li>2. Initial onboarding call to discuss integration details</li>
          <li>3. Technical documentation and API access setup</li>
          <li>4. Integration testing and verification</li>
          <li>5. Go-live preparation and launch</li>
        </ol>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-600"
        >
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
}

export default ConfirmationScreen;