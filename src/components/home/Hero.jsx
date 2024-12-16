import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';
import AnimatedButton from '../common/AnimatedButton';

function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(4,175,110,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(4,175,110,0.1),transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-20 md:pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
              <span className="block mb-2">Get</span>
              <span className="inline-block">
                <TypewriterText />
                <span className="text-primary">insurance</span>
              </span>
              <span className="block mt-2">in under 5 minutes</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-gray-600"
          >
            Instant quotes from licensed carriers. Pay monthly, not annually.
            <br className="hidden sm:block" />
            <span className="font-bold">Zero paperwork. Zero phone calls.</span>{' '}
            <motion.span 
              className="inline-block font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Zero Drama.
            </motion.span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <AnimatedButton
              to="/get-quotes"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-full text-white bg-primary hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Free Quotes
            </AnimatedButton>
            
            <AnimatedButton
              to="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full text-primary bg-white border-2 border-primary hover:bg-primary-50 transition-colors"
            >
              Login
            </AnimatedButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 md:mt-12"
          >
            <p className="text-sm text-gray-500">
              Trusted by thousands of customers across the Caribbean
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4 sm:flex sm:space-x-6">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl sm:text-4xl font-bold text-primary">30K+</span>
                <span className="mt-1 text-xs sm:text-sm text-gray-600 text-center sm:text-left">Active<br />Policies</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl sm:text-4xl font-bold text-primary">95%</span>
                <span className="mt-1 text-xs sm:text-sm text-gray-600 text-center sm:text-left">Customer<br />Satisfaction</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl sm:text-4xl font-bold text-primary">5</span>
                <span className="mt-1 text-xs sm:text-sm text-gray-600 text-center sm:text-left">Caribbean<br />Countries</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements - Hidden on mobile */}
        <div className="hidden sm:block">
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse delay-700" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse delay-500" />
        </div>
      </div>
    </div>
  );
}

export default Hero;