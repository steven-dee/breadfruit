import { motion } from 'framer-motion';

function InsuranceSelector({ selectedInsurer, onSelect }) {
  const insurers = [
    { id: 'sagicor', name: 'Sagicor' },
    { id: 'gtm', name: 'GTM' },
    { id: 'newIndia', name: 'New India' },
    { id: 'caribbeanAlliance', name: 'Caribbean Alliance' },
    { id: 'beacon', name: 'Beacon Insurance' }
  ];

  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-white text-center"
      >
        Current Auto Insurance
      </motion.h2>

      {/* Mobile Layout */}
      <div className="sm:hidden space-y-2 max-w-sm mx-auto">
        {insurers.map((insurer) => (
          <motion.button
            key={insurer.id}
            onClick={() => onSelect(insurer.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
              selectedInsurer === insurer.id
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'bg-[#1e2937] text-white hover:bg-[#2d3745]'
            }`}
          >
            {insurer.name}
          </motion.button>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:grid grid-cols-3 gap-4 max-w-4xl mx-auto">
        {insurers.map((insurer) => (
          <motion.button
            key={insurer.id}
            onClick={() => onSelect(insurer.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-lg text-center transition-all duration-200 ${
              selectedInsurer === insurer.id
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'bg-[#1e2937] text-white hover:bg-[#2d3745]'
            }`}
          >
            <span className="text-lg font-medium whitespace-normal">
              {insurer.name}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default InsuranceSelector;