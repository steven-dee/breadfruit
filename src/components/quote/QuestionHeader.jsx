import { motion } from 'framer-motion';

function QuestionHeader({ vehicleIndex, totalVehicles, children }) {
  const getVehicleLabel = () => {
    if (!totalVehicles || totalVehicles === 1) return '';
    const labels = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    return `${labels[vehicleIndex]} Vehicle Year`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold text-white mb-2">
        {totalVehicles > 1 ? getVehicleLabel() : children}
      </h2>
    </motion.div>
  );
}

export default QuestionHeader;