import { motion } from 'framer-motion';
import { vehicleTrims } from '../../../data/vehicleData/trims';

function TrimSelector({ question, onSelect, vehicleIndex, totalVehicles, answers }) {
  // Get the selected make and model from answers using the vehicle index
  const makeQuestionId = `vehicleMake_${vehicleIndex}`;
  const modelQuestionId = `vehicleModel_${vehicleIndex}`;
  const selectedMake = answers[makeQuestionId] || '';
  const selectedModel = answers[modelQuestionId] || '';

  // Get trims for the selected make and model
  const trimKey = `${selectedMake.toLowerCase()}-${selectedModel.toLowerCase().replace(/\s+/g, '-')}`;
  const trims = vehicleTrims[trimKey] || [];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        {selectedMake && selectedModel && (
          <div className="text-sm text-gray-400">
            {selectedMake.toUpperCase()} {selectedModel}
          </div>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-white"
        >
          {totalVehicles > 1 ? `${getVehicleLabel(vehicleIndex)} Vehicle Trim` : 'Vehicle Trim'}
        </motion.h2>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden space-y-2 max-w-sm mx-auto">
        {trims.map((trim) => (
          <TrimButton
            key={trim}
            trim={trim}
            onClick={() => onSelect(trim)}
            layout="mobile"
          />
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {trims.map((trim) => (
          <TrimButton
            key={trim}
            trim={trim}
            onClick={() => onSelect(trim)}
            layout="desktop"
          />
        ))}
      </div>

      {trims.length === 0 && (
        <div className="text-center text-gray-400 py-8">
          No trims available for this model
        </div>
      )}
    </div>
  );
}

function TrimButton({ trim, onClick, layout }) {
  const baseClasses = `
    w-full text-left transition-all duration-200
    bg-[#1e2937] text-white hover:bg-primary
  `;

  const mobileClasses = "p-4 rounded-xl";
  const desktopClasses = "p-6 rounded-lg";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${layout === 'mobile' ? mobileClasses : desktopClasses}`}
    >
      {trim}
    </motion.button>
  );
}

function getVehicleLabel(index) {
  const labels = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  return labels[index] || 'Additional';
}

export default TrimSelector;