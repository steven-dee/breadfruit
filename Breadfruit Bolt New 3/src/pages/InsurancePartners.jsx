import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HowItWorks from '../components/partners/HowItWorks';
import PartnerBenefits from '../components/partners/PartnerBenefits';

function InsurancePartners() {
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
              Grow your insurance business digitally
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Join Breadfruit's digital insurance marketplace and connect with customers who are ready to buy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/partner/register"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-lg font-medium rounded-full text-white bg-primary hover:bg-primary-600 hover:border-primary-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Become a Partner
              </Link>
              <Link
                to="/partner/login"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-lg font-medium rounded-full text-primary bg-white hover:bg-primary-50 transition-colors duration-300"
              >
                Partner Login
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 right-0 h-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(4,175,110,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(4,175,110,0.1),transparent_70%)]" />
        </div>
      </div>

      <PartnerBenefits />
      <HowItWorks />

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
              Ready to grow your business?
            </h2>
            <p className="text-xl text-primary-50 mb-12 max-w-2xl mx-auto">
              Start reaching more customers and growing your insurance business digitally.
            </p>
            <Link
              to="/partner/register"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-primary bg-white hover:bg-primary-50 transition-colors duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default InsurancePartners;