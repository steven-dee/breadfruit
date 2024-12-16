import { motion } from 'framer-motion';
import AnimatedButton from '../components/common/AnimatedButton';

function LoginRouter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(4,175,110,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(4,175,110,0.1),transparent_70%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <motion.div 
          variants={itemVariants}
          className="sm:mx-auto sm:w-full sm:max-w-md"
        >
          <img className="mx-auto h-12 w-auto" src="/logo.svg" alt="Breadfruit Insurance" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Let's get you to the right place
          </h2>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        >
          <div className="bg-white py-8 px-4 shadow-lg sm:rounded-xl sm:px-10 relative">
            {/* Subtle gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl" />
            
            <div className="relative space-y-6">
              <AnimatedButton
                to="/client/login"
                className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-primary bg-white border-2 border-primary hover:bg-primary-50 transition-colors"
              >
                Clients
              </AnimatedButton>

              <div className="flex items-center justify-center">
                <motion.span 
                  className="px-4 py-1 text-xs font-medium tracking-wider uppercase text-gray-400 bg-gray-50 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  or
                </motion.span>
              </div>

              <AnimatedButton
                to="/partner/login"
                className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-primary bg-white border-2 border-primary hover:bg-primary-50 transition-colors"
              >
                Insurance Carriers
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse delay-700" />
    </div>
  );
}

export default LoginRouter;