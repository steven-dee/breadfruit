import { motion } from 'framer-motion';
import ModelList from './ModelList';

function ModelSelector({ question, onSelect, vehicleIndex, totalVehicles, answers }) {
  // Get the selected make from answers using the vehicle index
  const makeQuestionId = `vehicleMake_${vehicleIndex}`;
  const selectedMake = answers?.[makeQuestionId] || '';

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        {selectedMake && (
          <div className="text-sm text-gray-400">
            {selectedMake.toUpperCase()}
          </div>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-white"
        >
          {totalVehicles > 1 ? `${getVehicleLabel(vehicleIndex)} Vehicle Model` : 'Vehicle Model'}
        </motion.h2>
      </div>

      <ModelList
        selectedMake={selectedMake}
        onSelect={onSelect}
      />
    </div>
  );
}

function getVehicleLabel(index) {
  const labels = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  return labels[index] || 'Additional';
}

export default ModelSelector;