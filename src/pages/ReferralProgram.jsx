import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReferralBenefits from '../components/referral/ReferralBenefits';
import HowItWorks from '../components/referral/HowItWorks';

function ReferralProgram() {
  const howItWorksRef = useRef(null);

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8"
            >
              Become a Referral Partner
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Earn money each time a friend buys their insurance through Breadfruit
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/referral/apply"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-lg font-medium rounded-full text-white bg-primary hover:bg-primary-600 hover:border-primary-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Become a Referral Partner
              </Link>
              <button
                onClick={scrollToHowItWorks}
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-lg font-medium rounded-full text-primary bg-white hover:bg-primary-50 transition-colors duration-300"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 right-0 h-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(4,175,110,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(4,175,110,0.1),transparent_70%)]" />
        </div>
      </div>

      <ReferralBenefits />
      
      <div ref={howItWorksRef}>
        <HowItWorks />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary-600">
        <div className="max-w-4xl mx-auto text-center py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to start earning?
            </h2>
            <p className="text-xl text-primary-50 mb-12 max-w-2xl mx-auto">
              Join our referral program today and start earning rewards for every successful referral.
            </p>
            <Link
              to="/referral/apply"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-primary bg-white hover:bg-primary-50 transition-colors duration-300"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ReferralProgram;