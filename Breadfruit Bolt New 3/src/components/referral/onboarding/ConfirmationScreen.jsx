import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../stores/auth';
import { useEffect } from 'react';

function ConfirmationScreen() {
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = async () => {
      try {
        // Auto-login as referral partner
        await login({
          email: 'client@example.com',
          password: 'password',
          role: 'referral'
        });
        // After successful login, user will be redirected to dashboard
      } catch (error) {
        console.error('Auto-login failed:', error);
      }
    };
    autoLogin();
  }, [login]);

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
        We've received your application and a Breadfruit representative will reach out to you in 24-48 hours. In the meantime, please visit your referral partner portal to view your account and track your referral analytics.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          to="/referral/dashboard"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-600"
        >
          Go to Referral Dashboard
        </Link>
      </motion.div>
    </div>
  );
}

export default ConfirmationScreen;